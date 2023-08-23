import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goodsList: [],
  productId: null,
};

export const getGoodsList = createAsyncThunk(
  'goodsList/getGoodsList',
  async ({token}, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductId: (state, action) => (state.productId = action.payload),
  },
  extraReducers: {
    [getGoodsList.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.goodsList = action.payload;
    },
    [getGoodsList.pending]: () => console.log('pending'),
    [getGoodsList.rejected]: () => console.log('rejected'),
  },
});

export default productsSlice.reducer;

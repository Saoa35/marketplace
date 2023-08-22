import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goodsList: [],
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
    setGoodsList: (state, action) => {
      state.goodsList = action.payload;
    },
  },
  extraReducers: {
    [getGoodsList.fulfilled]: () => console.log('fulfilled'),
    [getGoodsList.pending]: () => console.log('pending'),
    [getGoodsList.rejected]: () => console.log('rejected'),
  },
});

export const {setGoodsList} = productsSlice.actions;

export default productsSlice.reducer;

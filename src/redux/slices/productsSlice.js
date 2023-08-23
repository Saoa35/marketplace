import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goodsList: [],
  productId: null,
  currentProduct: null,
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

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getCurrentProduct = createAsyncThunk(
  'currentProduct/getCurrentProduct',
  async ({token, productId}, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products/' + productId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteCurrentProduct = createAsyncThunk(
  'currentProduct/deleteCurrentProduct',
  async ({token, productId}, {rejectWithValue}) => {
    try {
      await axios.delete(
        'https://rn.binary-travel-app.xyz/api/v1/products/' + productId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
  extraReducers: {
    [getGoodsList.fulfilled]: (state, action) => {
      console.log('GoodsList fulfilled');
      state.goodsList = action.payload;
    },
    [getGoodsList.pending]: () => console.log('GoodsList pending'),
    [getGoodsList.rejected]: () => console.log('GoodsList rejected'),

    [getCurrentProduct.fulfilled]: (state, action) => {
      console.log('CurrentProduct fulfilled');
      state.currentProduct = action.payload;
    },
    [getCurrentProduct.pending]: () => console.log('CurrentProduct pending'),
    [getCurrentProduct.rejected]: () => console.log('CurrentProduct rejected'),

    [deleteCurrentProduct.fulfilled]: () =>
      console.log('DeleteProduct fulfilled'),
    [deleteCurrentProduct.pending]: () => console.log('DeleteProduct pending'),
    [deleteCurrentProduct.rejected]: () =>
      console.log('DeleteProduct rejected'),
  },
});

export const {setProductId} = productsSlice.actions;

export default productsSlice.reducer;

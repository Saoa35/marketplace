import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goodsList: [],
  productId: null,
  currentProduct: null,
  productImage: null,
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

export const setProductImage = createAsyncThunk(
  'productImage/setProductImage',
  async ({formdata, token}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'https://rn.binary-travel-app.xyz/api/v1/images',
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('setProductImage: ', response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
      state.goodsList = action.payload;
    },
    [getGoodsList.pending]: () => {},
    [getGoodsList.rejected]: () => {},

    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload;
    },
    [getCurrentProduct.pending]: () => {},
    [getCurrentProduct.rejected]: () => {},

    [deleteCurrentProduct.fulfilled]: () => {},
    [deleteCurrentProduct.pending]: () => {},
    [deleteCurrentProduct.rejected]: () => {},

    [setProductImage.fulfilled]: (state, action) => {
      state.productImage = action.payload;
    },
    [setProductImage.pending]: () => {},
    [setProductImage.rejected]: () => {},
  },
});

export const {setProductId} = productsSlice.actions;

export default productsSlice.reducer;

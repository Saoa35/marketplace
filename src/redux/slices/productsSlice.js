import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  goodsList: [],
};

export const getGoodsList = createAsyncThunk(
  'goodsList/getGoodsList',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://rn.binary-travel-app.xyz/api/v1/products',
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        },
      );
    } catch (error) {}
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [getUserData.fulfilled]: () => console.log('fulfilled'),
    [getUserData.pending]: () => console.log('pending'),
    [getUserData.rejected]: () => console.log('rejected'),
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;

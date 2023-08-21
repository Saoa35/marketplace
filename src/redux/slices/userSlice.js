import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
};

export const getUserData = createAsyncThunk(
  'userData/getUserData',
  async (_, {rejectWithValue, dispatch}) => {
    const response = await axios.post(
      'https://rn.binary-travel-app.xyz/api/v1/auth/sign-in',
      {
        // email: userEmail,
        // password: password,
        email: 'arthur.dent@mail.com',
        password: 'pa$Sword',
      },
    );
    dispatch(setUserData(response.data));
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

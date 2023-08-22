import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
};

export const getUserDataSignUp = createAsyncThunk(
  'userData/getUserData',
  async (_, {rejectWithValue, dispatch}) => {
    const response = await axios.post(
      'https://rn.binary-travel-app.xyz/api/v1/auth/sign-up',
      {
        fullName: userName,
        email: userEmail,
        phoneNumber: phone,
        password: password,
      },
    );
    dispatch(setUserData(response.data));
  },
);

export const getUserDataSignIn = createAsyncThunk(
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
    [getUserDataSignUp.fulfilled]: () => console.log('fulfilled'),
    [getUserDataSignUp.pending]: () => console.log('pending'),
    [getUserDataSignUp.rejected]: () => console.log('rejected'),

    [getUserDataSignIn.fulfilled]: () => console.log('fulfilled'),
    [getUserDataSignIn.pending]: () => console.log('pending'),
    [getUserDataSignIn.rejected]: () => console.log('rejected'),
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;

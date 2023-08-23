import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
};

export const signUpUser = createAsyncThunk(
  'userData/signUpUser',
  async ({userName, userEmail, phone, password}) => {
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

export const signInUser = createAsyncThunk(
  'userData/signInUser',
  async ({userEmail, password}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'https://rn.binary-travel-app.xyz/api/v1/auth/sign-in',
        {
          email: userEmail,
          password: password,
        },
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // [signUpUser.fulfilled]: (state, action) => {
    //   state.status = 'fulfilled';
    //   state.userData = action.payload;
    // },
    // [signUpUser.pending]: state => {
    //   state.status = 'pending';
    // },
    // [signUpUser.rejected]: state => {
    //   state.status = 'rejected';
    // },

    [signInUser.fulfilled]: (state, action) => {
      console.log('SignInUser fulfilled');
      state.userData = action.payload;
    },
    [signInUser.pending]: () => {
      console.log('SignInUser pending');
    },
    [signInUser.rejected]: () => {
      console.log('SignInUser rejected');
    },
  },
});

export default userSlice.reducer;

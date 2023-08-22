import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  // token: null,
  status: null,
};

export const signUpUser = createAsyncThunk(
  'userData/signUpUser',
  async (
    {userName, userEmail, phone, password},
    {rejectWithValue, dispatch},
  ) => {
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
  async ({userEmail, password}, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.post(
        'https://rn.binary-travel-app.xyz/api/v1/auth/sign-in',
        {
          email: userEmail,
          password: password,
        },
      );
      // dispatch(setUserData(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
    [signUpUser.fulfilled]: (state, action) => {
      state.status === 'fulfilled';
      state.userData = action.payload;
      // state.token = action.payload.token;
    },
    [signUpUser.pending]: state => state.status === 'pending',
    [signUpUser.rejected]: state => state.status === 'rejected',

    [signInUser.fulfilled]: (state, action) => {
      state.status === 'fulfilled';
      state.userData = action.payload;
      // state.token = action.payload.token;
    },
    [signInUser.pending]: state => state.status === 'pending',
    [signInUser.rejected]: state => state.status === 'rejected',
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;

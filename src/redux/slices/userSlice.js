import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  userAvatar: null,
  avatarId: null,
};

export const signUpUser = createAsyncThunk(
  'userData/signUpUser',
  async ({userName, userEmail, phone, password}) => {
    try {
      const response = await axios.post(
        'https://rn.binary-travel-app.xyz/api/v1/auth/sign-up',
        {
          fullName: userName,
          email: userEmail,
          phoneNumber: phone,
          password: password,
        },
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
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

export const setUserAvatar = createAsyncThunk(
  'userAvatar/setUserAvatar',
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

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const patchUserAvatar = createAsyncThunk(
  'userAvatar/patchUserAvatar',
  async ({userName, phone, token, avatarId}, {rejectWithValue}) => {
    try {
      await axios.patch(
        'https://rn.binary-travel-app.xyz/api/v1/auth/authenticated-user',
        {
          fullName: userName,
          phoneNumber: phone,
          avatar: avatarId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      console.log('signUpUser fulfilled');
      state.userData = action.payload;
    },
    [signUpUser.pending]: () => {
      console.log('signUpUser pending');
    },
    [signUpUser.rejected]: () => {
      console.log('signUpUser rejected');
    },

    [signInUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [signInUser.pending]: () => {},
    [signInUser.rejected]: () => {},

    [setUserAvatar.fulfilled]: (state, action) => {
      state.userAvatar = action.payload.url;
      state.avatarId = action.payload.id;
    },
    [setUserAvatar.pending]: () => {},
    [setUserAvatar.rejected]: () => {},

    [patchUserAvatar.fulfilled]: () => {},
    [patchUserAvatar.pending]: () => {},
    [patchUserAvatar.rejected]: () => {},
  },
});

export default userSlice.reducer;

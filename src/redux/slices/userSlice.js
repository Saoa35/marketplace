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

      console.log('setUserAvatar: ', response.data);

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
      const resp = await axios.patch(
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

      console.log('patchUserAvatar: ', resp.data);
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

    [setUserAvatar.fulfilled]: (state, action) => {
      console.log('setUserAvatar fulfilled');
      state.userAvatar = action.payload.url;
      state.avatarId = action.payload.id;
    },
    [setUserAvatar.pending]: () => {
      console.log('setUserAvatar pending');
    },
    [setUserAvatar.rejected]: () => {
      console.log('setUserAvatar rejected');
    },

    [patchUserAvatar.fulfilled]: () => {
      console.log('patchUserAvatar fulfilled');
    },
    [patchUserAvatar.pending]: () => {
      console.log('patchUserAvatar pending');
    },
    [patchUserAvatar.rejected]: () => {
      console.log('patchUserAvatar rejected');
    },
  },
});

export default userSlice.reducer;

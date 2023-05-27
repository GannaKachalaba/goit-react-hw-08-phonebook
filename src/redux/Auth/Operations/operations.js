import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Register new user
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      Notiflix.Notify.success('THANK YOU, REGISTRATION SUCCESSFUL');
      return data;
    } catch (error) {
      Notiflix.Notify.failure('SORRY, REGISTRATION WAS REFUSED');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Log a previosly created user
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    Notiflix.Notify.success('THANK YOU, AUTHORIZATION SUCCESSFUL');
    return data;
  } catch (error) {
    Notiflix.Notify.failure('SORRY, AUTHORIZATION WAS REFUSED');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Unlog active user
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    Notiflix.Notify.failure('SORRY, THERE HAS BEEN A TECHNICAL FAILURE...');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Get information about the current user
const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const operations = {
  register,
  logIn,
  logOut,
  refreshUser,
};

export default operations;

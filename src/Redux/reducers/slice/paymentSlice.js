// features/payment/paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchClientSecret = createAsyncThunk(
  'payment/fetchClientSecret',
  async (amount, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    clientSecret: '',
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientSecret.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientSecret.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clientSecret = action.payload;
      })
      .addCase(fetchClientSecret.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default paymentSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Redux/reducers/slice/productSlice';
import cartReducer from './reducers/cartReducer';
import authReducer from "../Redux/reducers/slice/authSlice"
import paymentReducer from "./reducers/slice/paymentSlice"
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    payment: paymentReducer,
  },
});

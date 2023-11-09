import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from "./authSlice"
import paymentReducer from "./slice/paymentSlice"

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  payment: paymentReducer,
});

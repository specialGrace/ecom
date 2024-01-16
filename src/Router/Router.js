import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';

import CartScreen from '../screens/CartScreen';
import AdminPanel from '../screens/AdminPanelScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpFormScreen from '../screens/SignUpFormScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
const Router = ()=> {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      {/* <Route path="/about" element={<AboutScreen />} />



  {/* <Route path="/product/:id" component={ProductDetails} /> */}
  {/* <Route path="/product/:id" exact>
          {(routeProps) => <ProductDetails productId={routeProps.match.params.id} />}
        </Route> */}
        <Route path="/product/:productId" element={<ProductDetailScreen  />}/>

        <Route path="/cart" element={<CartScreen />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/products" element={<ProductListScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/SignUpForm" element={<SignUpFormScreen />} />
        <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
        {/* <Route path="/login" element={<SignupScreen />} /> */}
      <Route path="/not-found" element={<NotFoundScreen />} />
      {/*


      <Route path="/checkout" element={<CheckoutScreen />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardScreen />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="receipts" element={<Receipts />} />
      </Route> */}
      <Route path="*" element={<Navigate to="/not-found" />} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      {/* <ProtectedRoute path="/admin" component={AdminPanel} /> */}


    </Routes>
  );
}

export default Router




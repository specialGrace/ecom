
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../Redux/Actions/AuthActions';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the signUpUser action with the form data
    dispatch(signUpUser(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label className="block mb-4">
        <span className="text-gray-700">Username:</span>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;

import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-main-dark-bg">
      <div className="p-8 bg-light-gray dark:bg-secondary-dark-bg rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-white">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded dark:bg-main-dark-bg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded dark:bg-main-dark-bg"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

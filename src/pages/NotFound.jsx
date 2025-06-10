import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-main-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-700 dark:text-white">404</h1>
        <p className="text-xl mt-4 text-gray-500 dark:text-gray-300">Page Not Found</p>
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

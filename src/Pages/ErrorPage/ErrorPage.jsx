import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-[10rem] font-light text-gray-200 leading-none tracking-tighter">
          404
        </h1>

        <div className="w-10 h-px bg-gray-200 mx-auto my-6" />

        <p className="text-base font-medium text-gray-900 mb-1">
          Page not found
        </p>
        <p className="text-sm text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>

        
        <a  href="/"
          className="inline-block bg-gray-900 text-white text-sm px-6 py-2.5 rounded-md hover:opacity-75 transition-opacity"
        >
          Go back home
        </a>

      </div>
    </div>
  );
};

export default ErrorPage;
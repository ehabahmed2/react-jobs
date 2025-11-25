import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-dark text-center px-4">
      <h1 className="text-9xl font-extrabold text-brand-light">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-white">Page Not Found</h2>
      <p className="mt-2 text-neutral-light">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-brand-light text-white px-6 py-2 rounded-md hover:bg-brand-dark transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

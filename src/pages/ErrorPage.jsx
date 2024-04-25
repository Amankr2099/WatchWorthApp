import React from 'react';

export const ErrorPage = () => {
  return (
    <div className="container mt-5 bg-info p-5 rounded-3">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Page Not Found</p>
          <p>Sorry, the page you are looking for could not be found.</p>
        </div>
      </div>
    </div>
  );
};


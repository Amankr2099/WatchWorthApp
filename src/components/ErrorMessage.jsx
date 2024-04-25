import React from 'react'

export const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="container my-5 bg-danger p-5 rounded-3 text-white">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-4 py-5">Opps ! Error</h1>
          <p className="lead">{errorMessage}</p>
          {/* <p>Sorry, the page you are looking for could not be found.</p> */}
        </div>
      </div>
    </div>
  )
}

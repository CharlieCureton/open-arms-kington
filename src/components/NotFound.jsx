import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div id="wrapper">
      <div className="contact">
        <div className="container">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-lg-7">
                    <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src="http://placehold.it/900x400"
                    alt=""
                    />
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-7">
                    <h1 className="font-weight-light">Page Not Found</h1>
                    <p>
                    We can't seem to find the page you're looking for. Make sure to check your spelling.
                    </p>
                    <Link to="/">
                        Go back to home page
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
export default NotFound;
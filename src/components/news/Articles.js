import React from "react";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div id="wrapper">
      <div className="articles">
        <div className="container">
          <Link to="/news/funding">
            <div className="row my-5">
              <div className="col-lg-4">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="https://via.placeholder.com/400x200"
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <h2 className="font-weight-light">OAK Funding</h2>
                <p className="font-size-19">
                OAK is delighted to announce that the project has been awarded a grant of £31,620 by the Community Lottery Fund and £10,000 by the Architectural Heritage Fund. This will <span className="text-muted">facilitate a feasibility study for the project including&hellip;</span>
                </p>
              </div>
            </div>
          </Link>
          <h2>More Articles:</h2>
          <div className="other-articles card my-3 mx-3 py-4">
            <p className="text-muted mx-4 my-4">We couldn't seem to find any other articles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
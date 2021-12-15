import React from "react";
//import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Article() {
  return (
    <div id="wrapper">
      <div className="article">
        <div className="container">
          <h1 className="mt-5">Funding</h1>
          <p>
          OAK is delighted to announce that the project has been awarded a grant of &#163;31,620 by the Community Lottery Fund and &#163;10,000 by the Architectural Heritage Fund. This will facilitate a feasibility study for the project including extensive community consultations. Funding includes initial consultations with architectural services, a hospitality and community pub advisor, quantity surveyor and full structural survey. A significant sum of &#163;9,600 has been allocated to youth provision in Kington, including dedicated young people&#39;s consultation and support from a youth enterprise advisor.
          </p>
          <p>
          <Link to="/about/funding" class="color-blue hover-color-blue">
            Learn more about the funding for the Open Arms Kington (OAK) Project.
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Article;
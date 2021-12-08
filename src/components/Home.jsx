import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div id="wrapper">
      <div className="home">
        <div className="container">
          <div className="row align-items-center section" id="section_1">
            <h2>
            Open Arms Kington was formed by a group of residents aspiring to create a kind &amp; welcoming, flexible community space for Kington, a facility currently lacking in the town.
            </h2>
          </div>
          <div className="row align-items-center section my-5" id="section_2">
            <div className="inner_section">
              <h2 className="center">News &amp; Achievements</h2>
              <article className="story" id="latest">
                <div className="row my-5">
                  <div className="col-lg-4">
                    <img
                      className="img-fluid rounded mb-4 mb-lg-0"
                      src="http://placehold.it/400x500"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7">
                  <Link to="/news/latest">
                    <p>
                    OAK is delighted to announce that the project has been awarded a grant of £31,620 by the Community Lottery Fund and £10,000 by the Architectural Heritage Fund. This will facilitate a feasibility study for the project including extensive community consultations. Funding includes initial consultations with architectural services, a hospitality and community pub advisor, quantity surveyor and full structural survey. A significant sum of £9,600 has be allocated to youth provision in Kington, including dedicated young people’s consultation and support from a youth enterprise advisor.
                    </p>
                  </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="row align-items-center my-1 section" id="section_3">
            <h2>Get In Touch</h2>
            <p className="font-size-23">
            We want OAK to be an inclusive, dynamic body and we welcome input from anybody who wants to be involved. If you would like to offer advice, expertise or insight, put forward ideas, join the discussion or simply ask a question, please complete the form below. All contributions welcome.
            </p>
            <Link to="/contact">
            <button
                >Contact Us<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
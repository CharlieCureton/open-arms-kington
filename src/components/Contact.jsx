import React from "react";
import $ from "jquery";

function Contact() {
  return (
    <div id="wrapper">
      <div className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>We want OAK to be an inclusive, dynamic body and we welcome input from anybody who wants to be involved. If you would like to offer advice, expertise or insight, put forward ideas, join the discussion or simply ask a question, please complete the form below. All contributions welcome.</p>
          <form id="contact-form" method="GET">
            <div class="form-group">
              <label for="input-email">Email Address</label>
              <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone</small>
            </div>
            <div class="form-group">
              <label for="input-message">Message</label>
              <textarea class="form-control" id="input-message" cols="40" rows="3" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
          <div class="send-message" id="success-message" hidden>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path></svg>
            <h2>Your message has been sent!</h2>
            <p>Thank you for your contribution</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
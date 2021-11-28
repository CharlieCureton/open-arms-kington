import React, { useEffect } from "react";
import { useParams } from "react-router";

const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
  
    xhr.responseType = 'json';
    xhr.onload = () => {
      resolve(xhr.response);
    }
    xhr.send();
  });
  return promise;
};
function Article() {
  let { postSlug } = useParams();

  useEffect(() => {
  }, [postSlug]);
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
  return (
    <div id="wrapper">
      <div className="article">
        <div className="container">
          <h1></h1>
          <h1 className="mt-5">This is a Post Title</h1>
          <h6 className="mb-5">The post slug is, {postSlug}</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
document.querySelector('.dropdown').style.display = 'none';
export default Article;
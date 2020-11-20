import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    // <div className="Footer">
    <footer className="Footer">
      {/* <div className="text"> */}
      View us on social media!{" "}
      <a href="https://github.com/PatCeriale/Truck-N-Tasty" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
        GitHub,{" "}
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-square"></i> Facebook,
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i> Instagram,{" "}
      </a>
      <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i> Twitter
      </a>
      <br /> Copyright <i className="far fa-copyright"></i> Truck N' Tasty 2020{" "}
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        Need help have a question?
      </a>
      <br />
      {/* </div> */}
    </footer>
  );
}

// GitHub link
// "Facebook Instagram and Twitter links"
// Contact/help page?

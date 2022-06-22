/***
 * Excerpted from "Modern CSS with Tailwind",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tailwind for more book information.
***/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


window.addEventListener("scroll", function(){
  var screenY = window.pageYOffset || document.documentElement.scrollTop;
  const developer = this.document.getElementById("developer");
  const marketing = this.document.getElementById("marketing");
  var init = 50
  var maxX = (window.innerWidth * 0.8 * 0.8) - 300;
  const multi = 6;
  var positionX = init + (screenY * multi);
  console.log(positionX);
  console.log("maxX: " + maxX);
  if (positionX > maxX) {
    console.log(maxX);
    positionX  = maxX;
  }
  developer.style.left = positionX + "px";
  marketing.style.left = positionX + "px";
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

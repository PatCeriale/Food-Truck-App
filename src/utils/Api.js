import axios from "axios";

export const getTrucks = function (location) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
  );
};

export const getGeolocation = function (location) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
  );
};
const API = {
  createNewUSer: function (userData) {
    return axios.post("http://localhost:5000/newuser", userData);
  },
};


axios.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";



export const createNewUser = function (userData) {
  return axios.post("/signup", userData);
};
export const signInUser = function (userData) {
  return axios.post("/signin", userData);
};

export const submitReview = function (reviewData) {
  return axios.post("/newreview", reviewData);
};

export const createSignIn = function (userData) {
  return axios.post("http:/localhost:3000/signin", userData);
};

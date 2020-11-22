import axios from "axios";

export const getTrucks = function (location) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
  );
};

export const getTruck = function (googleId) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${googleId}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
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

// export default API

// axios.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";
// const baseURL =
//   "http://localhost:5000/" || "https://truckntastyfood-backend.herokuapp.com/";
// const API = {
// 6bbe75058e694349c9a0bd5aa79d24dfd14ec15d

// export default API
//  6bbe75058e694349c9a0bd5aa79d24dfd14ec15d
// export const getTrucks = function () {
//   return axios.get(
//     "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6062,-122.3321&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20"
//   );
// };
// 6bbe75058e694349c9a0bd5aa79d24dfd14ec15d

const baseURL =
  // process.env.REACT_APP_API_URL ||
  "http://localhost:5000";
// "https://truckntastyfood-backend.herokuapp.com/";

export const createNewUser = function (userData) {
  return axios.post(`${baseURL}signup`, userData);
};

export const signInUser = function (userData) {
  return axios.post(`${baseURL}signin`, userData);
};

export const myUserAccount = function (userData) {
  return axios.get(`${baseURL}oneuser`);
};

export const submitReview = function (reviewData) {
  return axios.post(`${baseURL}newreview`, reviewData);
};

export const currentUserData = function (token) {
  return axios.post(`${baseURL}userdata`, token);
};
export const createSignIn = function (userData) {
  return axios.post(`${baseURL}signin`, userData);
};
// export const createSignIn = function (userData) {
//   return axios.post("http://localhost:3000/signin", userData);
// };

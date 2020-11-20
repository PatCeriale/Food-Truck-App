import axios from "axios";

export const getTrucks = function (lat, lng) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
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

axios.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";

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

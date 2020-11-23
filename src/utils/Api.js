import axios from "axios";

export const getTrucks = function (location) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
  );
};
export const getPlaceTrucks = function (lat, lng) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`
  );
};
export const getPlacesTrucks = function (place_id) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20&`
  );
};
// place_id=${lat},${lng}
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
    return axios.post(
      "https://truckntastyfood-backend.herokuapp.com/newuser",
      userData
    );
  },
};

// Uncomment for deployed
const baseURL = "https://truckntastyfood-backend.herokuapp.com/";
//   // process.env.REACT_APP_API_URL ||
//   // "http://localhost:5000" ||

// Uncomment for local
// const baseURL = "http://localhost:5000/";
// const baseURL =
// process.env.REACT_APP_API_URL ||
// "http://localhost:5000" ||
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

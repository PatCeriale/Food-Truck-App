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

const baseURL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000" ||
  "https://truckntastyfood-backend.herokuapp.com/";

export const createNewUser = function (userData) {
  return axios.post(`${baseURL}signup`, userData);
};
export const signInUser = function (userData) {
  return axios.post(`${baseURL}signin`, userData);
};

export const submitReview = function (reviewData) {
  return axios.post(`${baseURL}newreview`, reviewData);
};

export const createSignIn = function (userData) {
  return axios.post(`${baseURL}signin`, userData);
};

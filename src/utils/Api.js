import axios from "axios";
axios.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getTrucks = function () {
  return axios.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6062,-122.3321&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20"
  );
};

export const createNewUser = function (userData) {
  return axios.post("/newuser", userData);
};

export const submitReview = function (reviewData) {
  return axios.post("/newreview", reviewData);
};

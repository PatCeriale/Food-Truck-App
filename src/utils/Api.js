import axios from "axios";
axios.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const createNewUser = function (userData) {
  return axios.post("/newuser", userData);
};

export const submitReview = function (reviewData) {
  return axios.post("/newreview", reviewData);
};

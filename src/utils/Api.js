import axios from "axios";

const API = {
  createNewUSer: function (userData) {
    return axios.post("http://localhost:5000/newuser", userData);
  },
  getTrucks: function () {
    return axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6062,-122.3321&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20"
    );
  },
};

export default API;

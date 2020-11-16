import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: function(data) {
    return axios.get("/api/users/login", data);
  }
};
import axios from 'axios'

const API = {

createNewUSer: function (userData){
return axios.post("http://localhost:5000/newuser", userData)
}


}

export default API



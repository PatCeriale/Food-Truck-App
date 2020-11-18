import axios from 'axios'

const API = {

createNewUSer: function (userData){
return axios.post("http://localhost:3000/newuser", userData)
},
createSignIn: function (userData){
    return axios.post("http:/localhost:3000/signin", userData)
}

}

export default API



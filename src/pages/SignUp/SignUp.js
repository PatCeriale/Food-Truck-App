
import React, {useState} from "react";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./SignUp.css";

import API from "../../utils/Api";






import { createNewUser } from "../../utils/Api";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignUp() {
  const history = useHistory();



  const [mystate, setMyState]= useState({
    username:"",
    password:"",
    email:"",
    location:""
  })
 const classes = useStyles();


//class SignUp extends Component () {


  
  // state = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   location: ""
  // };

  

  const handleInputChange = event =>{


  const [mystate, setMyState] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
  });
  const classes = useStyles();

  //class SignUp extends Component () {

  // state = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   location: ""
  // };

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setMyState({
      ...mystate,

      [name]:value
    })
  
  }
    
  
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(mystate)

    API.createNewUSer(mystate).then((res)=>{
      console.log(res)
    }).catch(error => console.log("user registration failed:", error));
      

  }

//handleFormSubmit
//set UseState to capture user info
//submit to send user info API.createNewUser


  

      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mystate);

    createNewUser(mystate)
      .then((res) => {
        console.log(res);
        history.push("/user")
      })
      .catch((error) => console.log("user registration failed:", error));
  };

  //handleFormSubmit
  //set UseState to capture user info
  //submit to send user info API.createNewUser


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField

          onChange={handleInputChange}

            onChange={handleInputChange}

            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"

            value= {mystate.username}
            autoFocus
          />
          <TextField
          onChange={handleInputChange}

            value={mystate.username}
            autoFocus
          />
          <TextField
            onChange={handleInputChange}

            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField

          onChange={handleInputChange}

            onChange={handleInputChange}

            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField

          onChange={handleInputChange}

            onChange={handleInputChange}

            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="location"
            label="Location"
            NAME="location"
            id="location"
            autoComplete="current-location"
          />
          <Button

          // onSubmit={handleFormSubmit}

            // onSubmit={handleFormSubmit}

            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}






//export default SignUp;

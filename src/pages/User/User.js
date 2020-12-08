import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Container } from "@material-ui/core";
import "./User.css";
import { Link } from "react-router-dom";
import { signInUser, currentUserData } from "../../utils/Api";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    paddingBottom: "120px",
  },
}));

export default function User() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser();
  };

  const [profileState, setProfileState] = useState({
    username: "",
    email: "",
    location: "",
    token: "",
    _id: "",
    isAdmin: false,
    // loggedin: false,
  });

  useEffect(fetchUserData, []);

  function fetchUserData() {
    const token = localStorage.getItem("token");
    console.log(token);
    currentUserData({ token: token }).then((profileData) => {
      console.log("!!!!!!!!!!!", profileData);
      if (profileData) {
        setProfileState({
          username: profileData.data.username,
          email: profileData.data.email,
          location: profileData.data.location,
          token: token,
          _id: profileData.data._id,
          isAdmin: profileData.data.isAdmin,
          // loggedin: true,
        });
      } else {
        localStorage.removeItem("token");
        setProfileState({
          username: "",
          email: "",
          location: "",
          token: "",
          _id: "",
          isAdmin: false,
          // loggedin: false,
        });
      }
    });
  }
  // if (profileState.username.length > 0) {
  return (
    <div className={classes.root} onClick={handleSubmit}>
      <div>
        <h1>User: {profileState.username}</h1>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              src="https://i1.wp.com/whiterivernow.com/wp-content/uploads/2018/12/Under-Construction-Sign.png?fit=1230%2C580&ssl=1"
              className="construction"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  // } else {
  //   return (
  //     <div className={classes.root} onClick={handleSubmit}>
  //       <Container className="Container" maxWidth="sm">
  //         <Grid container spacing={4}>
  //           <Grid item xs={12} spacing={12}>
  //             <img
  //               src="https://64.media.tumblr.com/b343649189ed67f4b386539103f2b348/a34b696191849ea9-53/s540x810/4689ce9ad6173167269440f4314327be9f0f47db.png"
  //               alt="Food Truck"
  //               className="foodTruckImage"
  //             ></img>
  //           </Grid>
  //           <Grid item xs={12} spacing={3} className="userText">
  //             <h1>
  //               <Link to={"/signup"}>Sign up</Link> /{" "}
  //               <Link to={"/signin"}>Sign in</Link> to a user account to access
  //               all Truck N' Tasty has to offer!
  //             </h1>
  //           </Grid>
  //         </Grid>
  //       </Container>
  //     </div>
  //   );
  // }
}

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./User.css";
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
        });
      }
    });
  }

  return (
    <div className={classes.root} onClick={handleSubmit}>
      <div>
        <h1>User: {profileState.username}</h1>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

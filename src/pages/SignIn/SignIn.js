import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./SignIn.css";
import { signInUser } from "../../utils/Api";
import { createSignIn } from "../../utils/Api";
import Logo from "./salmonfavicon.png";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

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

export default function SignIn() {
  const history = useHistory();
  // const [mystate, setMyState] = useState({
  //   username: "",
  const [mystate, setMyState] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();
  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log(mystate);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setMyState({
      ...mystate,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mystate);

    signInUser(mystate)
      .then((res) => {
        console.log(res);
        history.push("/user");
      })
      .catch((error) => console.log("user login failed:", error));

    createSignIn(mystate)
      .then((res) => {
        console.log("user found,", res);
      })
      .catch((error) => console.log("email password does not exist", error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          <Logo />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          {/* //add submit handler, prevent default */}
          {/* <form className={classes.form} noValidate> */}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            id="username"
            value={mystate.username}
            onChange={handleInputChange}
            autoComplete="current-email"
          />
          {/* type="username"
            id="username"
            autoComplete="current-username"
            onChange={handleInputChange}
            value={mystate.username}
          /> */}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={mystate.password}
            onChange={handleInputChange}
            autoComplete="current-password"
            // autoComplete="current-password"
            onChange={handleInputChange}
            value={mystate.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

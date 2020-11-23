import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Card, CardContent } from "@material-ui/core";
import "./Home.css";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

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

export default function Home() {
  const location = useLocation();
  const classes = useStyles();
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    if (location.pathname === "/logout") {
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <div>
        <GoogleMap setFoodTrucks={setFoodTrucks} />
      </div>
    </>
  );
}

import { Container, IconButton, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./TruckResults.css";

export default function TruckResults({
  googleId,
  name,
  rating,
  address,
  isOpen,
  website,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} spacing={2}>
      <div className="TruckResults">
        <h3>{name}</h3>
        <hr />
        <br />
        {/* <img src="#" /> */}
        Location: {address}
        <br />
        Website: <a href="{website}" target="_blank" /> {website} <br />
        Status: {isOpen === true ? "Currently open" : "Currently closed"} <br />
        Rating: <strong>{rating}</strong> / 5
        <br />
        <Link to={"/truck?id=" + googleId}>more info...</Link>
      </div>
    </Grid>
    // </Container>
  );
}

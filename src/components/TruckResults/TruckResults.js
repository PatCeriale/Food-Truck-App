import { Container, IconButton, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./TruckResults.css";

export default function TruckResults({
  googleId,
  name,
  rating,
  address,
  isOpen,
}) {
  return (
    <Container container spacing={6} className="TruckResults">
      <h3>{name}</h3>
      <Grid item xs={12}>
        {/* <img src="#" /> */}
        Truck Location: {address}
        <br />
        Website: <br />
        Is open: {isOpen} <br />
        Rating: {rating}
        <br />
        <Link to={"/truck?id=" + googleId}>more info...</Link>
      </Grid>
    </Container>
  );
}

import { Container, IconButton, Button, Grid } from "@material-ui/core";

export default function TruckResults(props) {
  return (
    <Container container spacing={6}>
      <Grid item xs={12}>
        <img src="#" />
        Truck Name: <br />
        Truck Location: <br />
        Website: <br />
        Is open: <br />
        Global Rating: <br />
      </Grid>
    </Container>
  );
}

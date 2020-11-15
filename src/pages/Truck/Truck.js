import { Container, ButtonGroup, Button, Grid } from "@material-ui/core";
import "./Truck.css";

export default function Truck() {
  return (
    <div>
      <Container className="Container" maxWidth="sm">
        <img
          src="https://cbs6albany.com/resources/media/ef9010e4-ff57-4b7b-9ee9-7482bfad3a84-large16x9_foodtrucks.PNG?1587351056666"
          alt="Food Truck"
          className="foodTruckImage"
        ></img>
        <div className="containerContent">
          <h3>Truck Name</h3>
          <p>
            Location: <br />
            Name's Website: <br />
            <span className="left">Is open?</span>{" "}
            <span className="right">Global Rating: rating</span>
          </p>
        </div>
        <Button variant="contained" color="primary">
          Favorite
        </Button>
        Rate this food truck!
        <br />
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <i class="far fa-star"></i>
          </Button>
          <Button>
            <i class="far fa-star"></i>
          </Button>
          <Button>
            <i class="far fa-star"></i>
          </Button>
          <Button>
            <i class="far fa-star"></i>
          </Button>
          <Button>
            <i class="far fa-star"></i>
          </Button>
        </ButtonGroup>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            Food Truck Name
          </Grid>
          <Grid container item xs={12} spacing={3}>
            Location
          </Grid>
          <Grid container item xs={12} spacing={3}>
            Open
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

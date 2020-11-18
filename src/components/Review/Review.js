import { Container, Grid, Paper } from "@material-ui/core";
import "./Review.css";

export default function Review() {
  return (
    <Container className="Container" maxWidth="sm">
      <Grid container spacing={4}>
        <Grid item xs={6} spacing={6}>
          <h3>User's Name from userId?</h3>
          <br />
          reviewCreated
        </Grid>
        <Grid item xs={6} spacing={6} className="rating-stars">
          User Rating:
          {/* for loop with length of stars given? */}
          <i class="far fa-star"></i>
        </Grid>{" "}
        <Grid item xs={12} spacing={12}>
          <hr />
          <br />
          <p>
            Review contents: I'm baby flannel green juice palo santo shabby chic
            farm-to-table seitan, health goth blue bottle slow-carb coloring
            book swag narwhal affogato try-hard. Occupy +1 DIY lomo helvetica
            kinfolk. Gluten-free artisan mlkshk, green juice cray sriracha lyft
            chicharrones activated charcoal af edison bulb tumeric waistcoat
            lumbersexual. Mlkshk brunch lomo ennui edison bulb, readymade
            literally skateboard mixtape scenester irony kogi live-edge
            activated charcoal. Copper mug keytar iPhone gastropub meditation
            farm-to-table hexagon letterpress tattooed cloud bread photo booth
            retro organic celiac hot chicken. Put a bird on it austin enamel pin
            pabst art party microdosing messenger bag. Af neutra biodiesel
            knausgaard twee PBR&B church-key. Dummy text? More like dummy thicc
            text, amirite?
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

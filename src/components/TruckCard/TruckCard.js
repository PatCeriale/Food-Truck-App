import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  ButtonGroup,
  Button,
  Grid,
  TextareaAutosize,
} from "@material-ui/core";
import "./TruckCard.css";
import { useState } from "react";
import { submitReview } from "../../utils/Api";

export default function TruckCard({ vendorId }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const fullStar = <i class="fas fa-star"></i>;
  const emptyStar = <i class="far fa-star"></i>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return;
    console.log(rating, reviewText);
    submitReview({ rating, reviewText, vendorId });
  };

  return (
    <div className="TruckCard">
      <Container className="Container" maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12} spacing={12}>
            <img
              src="https://cbs6albany.com/resources/media/ef9010e4-ff57-4b7b-9ee9-7482bfad3a84-large16x9_foodtrucks.PNG?1587351056666"
              alt="Food Truck"
              className="foodTruckImage"
            ></img>
          </Grid>
          <Grid item xs={9} spacing={3}>
            <h2>Truck Name</h2>
            <hr />
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Button variant="contained" color="primary">
              Favorite
            </Button>
          </Grid>
          <Grid item xs={12} spacing={3}>
            Location: <br />
            <br />
            Name's Website: <br />
          </Grid>
          <Grid item xs={6} spacing={3}>
            <span className="left">Is open?</span>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <span className="right">Global Rating: rating/5</span>
          </Grid>{" "}
          <Grid item xs={8} s={6} spacing={1}>
            <form onSubmit={handleSubmit}>
              Write a review for this food truck!
              <br />
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                size="small"
              >
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Button
                      key={i}
                      color={rating >= i + 1 ? "primary" : "default"}
                      onClick={() => setRating(i + 1)}
                    >
                      {rating >= i + 1
                        ? (className = "fullStar")
                        : (className = "emptyStar")}
                    </Button>
                  ))}
              </ButtonGroup>
              <TextareaAutosize
                rowsMin={1}
                className="textArea"
                placeholder="What did you think?"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></TextareaAutosize>{" "}
              <Button type="submit" variant="contained" color="primary">
                Submit Review
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

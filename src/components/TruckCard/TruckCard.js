import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  Container,
  ButtonGroup,
  IconButton,
  Button,
  Grid,
  TextareaAutosize,
} from "@material-ui/core";
import "./TruckCard.css";
import { useState, useEffect } from "react";
import { submitReview, getTruck, getPlacesTrucks } from "../../utils/Api";

export default function TruckCard({ vendorId }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [truckData, setTruckData] = useState([]);

  useEffect(() => {
    console.log(vendorId);
    getPlacesTrucks(vendorId).then((data) => setTruckData(data));
    console.log(truckData.data.result);
  }, [vendorId]);
  const data = truckData.data.result;

  // useEffect(() => {
  // console.log(vendorId);
  // const res = getPlacesTrucks(vendorId);
  // console.log(res);
  // const res = async () => {};
  // setTruckData(
  //   async () =>
  //     await getTruck(vendorId).then((res) => {
  //       return res.data.results.map((data) => {
  //         debugger;
  //       });
  //     })
  // );
  //   await getTruck(vendorId).then((res) => {
  //     console.log(res);
  //     return res;
  // });
  // setTruckData(() => res);
  // // },
  // [truckData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return;
    // TODO: remove console.log
    // console.log(rating, reviewText);
    submitReview({ rating, reviewText, vendorId });
  };

  return (
    <div className="TruckCard">
      <Container className="Container" maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12} spacing={12}>
            <img
              src="https://64.media.tumblr.com/b343649189ed67f4b386539103f2b348/a34b696191849ea9-53/s540x810/4689ce9ad6173167269440f4314327be9f0f47db.png"
              alt="Food Truck"
              className="foodTruckImage"
            ></img>
          </Grid>
          <Grid item xs={9} spacing={3}>
            <h2>{truckData.data.result.name} </h2>
            <hr />
          </Grid>
          <Grid item xs={3} spacing={3}>
            {/* <Button variant="contained" color="primary">
              Favorite
            </Button> */}
          </Grid>
          <Grid item xs={12} spacing={3}>
            <strong>Location:</strong> {truckData.data.result.formatted_address}{" "}
            <br />
            <br />
            <strong>Website:</strong>{" "}
            <a href={truckData.data.result.website} target="_blank">
              {truckData.data.result.website}
            </a>{" "}
            <br />
          </Grid>
          <Grid item xs={6} spacing={3}>
            <span className="left">
              {" "}
              <strong>Status:</strong>{" "}
              {truckData.data.result.opening_hours.isOpen === true
                ? "Currently open"
                : "Currently closed"}{" "}
              <br />
            </span>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <span className="right">
              <strong>Global Rating:</strong>{" "}
              <span className="rating">{truckData.data.result.rating}</span>/5
            </span>
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
                    <IconButton
                      key={i}
                      color={rating >= i + 1 ? "primary" : "default"}
                      onClick={() => setRating(i + 1)}
                      size={rating >= i + 1 ? "large" : "small"}
                    >
                      <StarBorderIcon />
                    </IconButton>
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

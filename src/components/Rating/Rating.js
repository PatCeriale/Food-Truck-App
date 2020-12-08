import { Container, Grid } from "@material-ui/core";
import "./Rating.css";
import {
  submitReview,
  getTruck,
  getPlacesTrucks,
  getReviews,
} from "../../utils/Api";
import { useState, useEffect } from "react";

const moment = require("moment");
export default function Rating({ vendorId }) {
  const [ratingData, setRatingData] = useState([]);

  ////////////////////////////////////////////////////////
  useEffect(() => {
    // if (!vendorId) return;
    // console.log(vendorId);
    getReviews(vendorId).then((res) => {
      setRatingData(res.data);
    });
    // setLoading(false);
    // console.log(ratingData, "+++++++++++++++++++++++++");
  }, [vendorId]);
  /////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(ratingData, "+++++++++++++ Ratings!!!! ++++++++++++", vendorId);
  });
  //   }, [ratingData]);

  return (
    <div>
      {ratingData
        .slice(0)
        .reverse()
        .map((reviews) => (
          <Container className="Container" maxWidth="sm">
            <Grid container spacing={4}>
              <Grid item xs={6} spacing={6}>
                {/* <h3>{reviews?.author_name}</h3> */}
                <br />
                {moment(reviews?.reviewCreated).format("MMM, DD YYYY")}
              </Grid>
              <Grid item xs={6} spacing={6} className="rating-stars">
                User Rating: {reviews?.rating}{" "}
                {/* for loop with length of stars given? */}
                <i class="far fa-star"></i>
              </Grid>{" "}
              <Grid item xs={12} spacing={12}>
                <hr />
                <br />
                <p>{reviews?.reviewText}</p>
              </Grid>
            </Grid>
          </Container>
        ))}
    </div>
  );
}

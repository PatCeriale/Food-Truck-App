import { Container, Grid } from "@material-ui/core";
import "./Rating.css";
import {
  submitReview,
  getTruck,
  getPlacesTrucks,
  getReviews,
} from "../../utils/Api";
import { useState, useEffect } from "react";

export default function Review({ vendorId }) {
  const [ratingData, setRatingData] = useState([]);

  // useEffect(() => {
  //   if (!vendorId) return;
  //   const res = getPlacesTrucks(vendorId);
  //   // .then((res) =>
  //   setReviewData(res.data.result.reviews.map());
  //   // ({ author_name, rating, text, relative_time_description }) => ({
  //   //   author_name,
  //   //   rating,
  //   //   text,
  //   //   relative_time_description,
  //   // })
  //   // );
  //   // setLoading(false);
  // }, [vendorId]);

  ////////////////////////////////////////////////////////
  useEffect(() => {
    if (!vendorId) return;
    // console.log(vendorId);
    getReviews(vendorId).then((res) => setRatingData(res));
    // setLoading(false);
    // console.log(ratingData, "+++++++++++++++++++++++++");
  }, [vendorId]);
  /////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(ratingData, "+++++++++++++ Ratings!!!! ++++++++++++");
  }, [ratingData]);

  return (
    //
    <div>
      {ratingData
        .slice(0)
        .reverse()
        .map((ratings) => (
          <Container className="Container" maxWidth="sm">
            <Grid container spacing={4}>
              <Grid item xs={6} spacing={6}>
                {/* <h3>{ratings?.author_name}</h3> */}
                <br />
                {ratings?.reviewCreated}
              </Grid>
              <Grid item xs={6} spacing={6} className="rating-stars">
                User Rating: {ratings?.rating}{" "}
                {/* for loop with length of stars given? */}
                <i class="far fa-star"></i>
              </Grid>{" "}
              <Grid item xs={12} spacing={12}>
                <hr />
                <br />
                <p>{ratings?.reviewText}</p>
              </Grid>
            </Grid>
          </Container>
        ))}
    </div>
  );
}

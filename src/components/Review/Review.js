import { Container, Grid } from "@material-ui/core";
import "./Review.css";
import { submitReview, getTruck, getPlacesTrucks } from "../../utils/Api";
import { useState, useEffect } from "react";

export default function Review({ vendorId }) {
  const [reviewData, setReviewData] = useState({
    result: {
      reviews: [
        {
          author_name: "",
          rating: "",
          text: "",
          relative_time_description: "",
        },
      ],
    },
  });

  useEffect(() => {
    if (!vendorId) return;
    // console.log(vendorId);
    getPlacesTrucks(vendorId).then((res) =>
      setReviewData(res.data.result.reviews)
    );
    // setLoading(false);
  }, [vendorId]);

  useEffect(() => {
    console.log(reviewData, "----------------------");
  }, [reviewData]);

  return (
    <Container className="Container" maxWidth="sm">
      <Grid container spacing={4}>
        <Grid item xs={6} spacing={6}>
          {/* <h3> Name {reviewData.result.reviews[0].author_name}</h3> */}
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
          <p>Contents</p>
        </Grid>
      </Grid>
    </Container>
  );
}

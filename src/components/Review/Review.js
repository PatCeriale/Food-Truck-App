import { Container, Grid } from "@material-ui/core";
import "./Review.css";
import { submitReview, getTruck, getPlacesTrucks } from "../../utils/Api";
import { useState, useEffect } from "react";

export default function Review({ vendorId }) {
  const [reviewData, setReviewData] = useState(
    []
    // {
    // result: {
    //   reviews: [
    //     {
    //       author_name: "",
    //       rating: "",
    //       text: "",
    //       relative_time_description: "",
    //     },
    //   ],
    // },
    // }
  );

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
    getPlacesTrucks(vendorId).then((res) =>
      setReviewData(res.data.result.reviews)
    );
    // setLoading(false);
  }, [vendorId]);
  /////////////////////////////////////////////////////////

  useEffect(() => {
    // console.log(reviewData, "----------------------");
  }, [reviewData]);

  // ////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (!vendorId) return;
  //   // console.log(vendorId);
  //   getPlacesTrucks(vendorId).then((res) => setRatingData(res.data));
  //   // setLoading(false);
  // }, [vendorId]);
  // /////////////////////////////////////////////////////////

  // useEffect(() => {
  //   console.log(ratingData, "+++++++++++++++++++++++++");
  // }, [ratingData]);

  return (
    //
    <div>
      {reviewData
        .slice(0)
        .reverse()
        .map((reviews) => (
          <Container className="Container" maxWidth="sm">
            <Grid container spacing={4}>
              <Grid item xs={6} spacing={6}>
                <h3>{reviews?.author_name}</h3>
                <br />
                {reviews?.relative_time_description}
              </Grid>
              <Grid item xs={6} spacing={6} className="rating-stars">
                User Rating: {reviews?.rating}{" "}
                {/* for loop with length of stars given? */}
                <i class="far fa-star"></i>
              </Grid>{" "}
              <Grid item xs={12} spacing={12}>
                <hr />
                <br />
                <p>{reviews?.text}</p>
              </Grid>
            </Grid>
          </Container>
        ))}
    </div>
  );
}

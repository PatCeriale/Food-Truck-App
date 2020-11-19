import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Truck from "../Truck/Truck";
import "./Search.css";
import { getTrucks } from "../../utils/Api";
import SearchCity from "../../components/CitySearch/CitySearch";
import { useEffect, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import axios
// import getTrucks from "../../utils/Api";

export default function Search() {
  const [truckList, setTruckList] = useState([]);
  const [query, setQuery] = useState("");
  //useState array of trucks
  //
  useEffect((query) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query}&radius=1500&type=restaurant&keyword=food%20truck&key=AIzaSyDuPsN0ojCj-Ii8azSMi47no7xGpJZ7d20`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // renderToPage????
      });
  });
  // }, [vicinityOnSubmit])
  //if (loading) { return <p>Loading...</p> }
  // if (error) { return <p>Error</p> }
  return (
    <Router>
      <div>
        <h1>Search Trucks</h1>

        <SearchCity></SearchCity>
      </div>
      <Switch>
        <Route exact path={["/truck"]}>
          <Truck />
        </Route>
        <Link to="/truck">Link to Truck Page</Link>
      </Switch>
    </Router>
  );
}

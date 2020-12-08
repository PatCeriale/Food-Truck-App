import TruckResults from "../../components/TruckResults/TruckResults";
import "./Search.css";
import { getPlaceTrucks, getPlacesTrucks } from "../../utils/Api";
import { useEffect, useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { LocationOn } from "@material-ui/icons";
import { Container, Grid } from "@material-ui/core";

export default function Search() {
  const [address, setAddress] = useState("");
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    if (!address) return;
    const handle = setTimeout(async () => {
      const geoCodes = await geocodeByAddress(address);
      const coords = await getLatLng(geoCodes[0]);
      const res = await getPlaceTrucks(coords.lat, coords.lng);
      console.log("++++++++++++++++++++++++", res, "++++++++++++++++++++++++");

      if (res.statusText !== "OK") {
        console.error("failed to get search results");
        return;
      }
      setTrucks(() =>
        res.data.results
          //only open food trucks
          .filter(({ business_status }) => business_status === "OPERATIONAL")
          .filter(({ name }) => name !== "Seattle Food Truck .com")
          .map(
            ({
              name,
              rating, // formatted_address: address,
              vicinity: address,
              place_id: googleId,
              opening_hours,
              website,
            }) => ({
              googleId,
              name,
              rating,
              address,
              website,
              isOpen: !!opening_hours?.open_now,
            })
          )
      );
    }, 1000);
    return () => clearTimeout(handle);
  }, [address]);

  return (
    <div className="Search">
      <h1>Search Trucks</h1>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={(value) => setAddress(value)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              className="input"
              {...getInputProps({ placeholder: "search by city" })}
            />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, i) => {
                const style = {
                  backgroundColor: suggestion.active ? "aqua" : "white",
                  marginLeft: "25px",
                };
                return (
                  <div
                    key={i}
                    {...getSuggestionItemProps(
                      suggestion,
                      { style },
                      { LocationOn }
                    )}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutoComplete>{" "}
      <Container>
        <Grid container spacing={1}>
          {trucks?.map((truck, i) => (
            <TruckResults key={i} {...truck} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

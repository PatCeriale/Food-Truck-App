import TruckResults from "../../components/TruckResults/TruckResults";
import "./Search.css";
import { getTrucks } from "../../utils/Api";
import { useEffect, useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { LocationOn } from "@material-ui/icons";

export default function Search() {
  const [address, setAddress] = useState("");
  const [trucks, setTrucks] = useState([]);

  // console.log(coordinates.lat, coordinates.lng);
  // const [truckList, setTruckList] = useState([]);
  //useState array of trucks
  //
  useEffect(() => {
    if (!address) return;
    const handle = setTimeout(async () => {
      const geoCodes = await geocodeByAddress(address);
      const coords = await getLatLng(geoCodes[0]);
      console.log(coords);
      const res = await getTrucks(coords.lat, coords.lng);
      if (res.statusText !== "OK") {
        console.error("failed to get search results");
        return;
      }
      console.log(res);
      setTrucks(() =>
        res.data.results
          //only open food trucks
          .filter(({ business_status }) => business_status === "OPERATIONAL")
          .map(
            ({
              name,
              rating,
              vicinity: address,
              place_id: googleId,
              opening_hours,
            }) => ({
              googleId,
              name,
              rating,
              address,
              isOpen: !!opening_hours?.open_now,
            })
          )
      );
    }, 1000);
    return () => clearTimeout(handle);
  }, [address]);
  // }, [vicinityOnSubmit])
  //if (loading) { return <p>Loading...</p> }
  // if (error) { return <p>Error</p> }
  return (
    <div>
      {/* <PlacesAutocomplete /> */}
      <h1>Search Trucks</h1>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={(value) => setAddress(value)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "search by city" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, i) => {
                const style = {
                  backgroundColor: suggestion.active ? "aqua" : "white",
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
                    ;{suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutoComplete>{" "}
      {trucks?.map((truck, i) => (
        <TruckResults key={i} {...truck} />
      ))}
    </div>
  );
}

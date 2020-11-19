import React from "react";
import PlacesAutoComplete, {
  getLatLng,
  geocodeByAddress,
} from "react-places-autocomplete";
import { LocationOn } from "@material-ui/icons";

function SearchCity() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  console.log(coordinates.lat, coordinates.lng);
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "search by city" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "aqua" : "white",
                };
                return (
                  <div
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
      </PlacesAutoComplete>
    </div>
  );
}

export default SearchCity;

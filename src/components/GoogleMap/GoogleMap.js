import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./GoogleMap.css";
import { getGeolocation, getTrucks } from "../../utils/Api";
import { Height } from "@material-ui/icons";

//note: code formatted for ES6 here
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 47.606,
        lng: -122.33,
      },
      foodTrucks: [],
    };
  }

  componentDidMount() {
    // userinput.replace(" ","+")

    // move all to handle select
    getGeolocation("new+york").then((data) => {
      console.log(data);
      var location =
        data.data.results[0].geometry.location.lat +
        "," +
        data.data.results[0].geometry.location.lng;
      console.log(location);

      getTrucks(location).then((res) => {
        console.log(res);

        const results = res.data.results.map((r) => ({
          name: r.name,
          icon2: r.icon,
          status: r.business_status,
        }));
        this.setState({ foodTrucks: results });
        this.props.setFoodTrucks(results);
      });
    });
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ address });
        this.setState({ mapCenter: latLng });
        // axios request for pins
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const mapStyle = {
      width: "95%",
      height: "65%",
      "margin-left": "auto",
      "margin-right": "auto",
      "margin-top": "auto",
      "z-index": "-1",
      position: "absolute",
    };
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map
          style={mapStyle}
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          onClick={this.onMapClicked}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCuN1lJcst4n7Y8RM3vGqbrHk-FLLJj6xc",
})(MapContainer);

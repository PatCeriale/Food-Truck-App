import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TruckCard from "../../components/TruckCard/TruckCard";
import Review from "../../components/Review/Review";
// import Truck from "../../components/TruckCard/TruckCard";
import "./Truck.css";
import { getPlacesTrucks } from "../../utils/Api";

export default function Truck() {
  const [truckId, setTruckId] = useState("");

  // const [truckData, ]

  //   useEffect(() => {
  const location = useLocation();
  const vendorId = new URLSearchParams(location.search).get("id");
  console.log(vendorId);
  //     const handle = setTimeout(async () => {
  //       const res = await getPlacesTrucks(vendorId);
  //   console.log(res);
  //   if (res.statusText !== "OK") {
  //     console.error("failed to get search results");
  //     return;
  //   }
  //   });
  // }

  return (
    <div className="Trucks">
      {/* TODO: get vendor id and user id to plug in */}
      <TruckCard
        vendorId={new URLSearchParams(location.search).get("id")}
        // userId="abcd"
      />
      <Review />
      <Review />
    </div>
  );
}

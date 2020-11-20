import { useLocation } from "react-router-dom";
import TruckCard from "../../components/TruckCard/TruckCard";
import Review from "../../components/Review/Review";
// import Truck from "../../components/TruckCard/TruckCard";
import "./Truck.css";

export default function Truck() {
  // const [truckData, ]
  const location = useLocation();
  const vendorId = new URLSearchParams(location.search).get("id");
  console.log(vendorId);
  return (
    <div className="Trucks">
      {/* TODO: get vendor id and user id to plug in */}
      <TruckCard
        vendorId={new URLSearchParams(location.search).get("id")}
        userId="abcd"
      />
      <Review />
      <Review />
    </div>
  );
}

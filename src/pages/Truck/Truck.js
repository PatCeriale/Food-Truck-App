import TruckCard from "../../components/TruckCard/TruckCard";
import Review from "../../components/Review/Review";
// import Truck from "../../components/TruckCard/TruckCard";
import "./Truck.css";

export default function Truck() {
  return (
    <div className="Trucks">
      <TruckCard vendorId="12345" userId="abcd" />
      <Review />
      <Review />
    </div>
  );
}

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TruckCard from "../../components/TruckCard/TruckCard";
import Review from "../../components/Review/Review";
// import Truck from "../../components/TruckCard/TruckCard";
import "./Truck.css";
import { getPlacesTrucks, getTruck } from "../../utils/Api";

export default function Truck() {
  const [truckId, setTruckId] = useState("");
  const [truckData, setTruckData] = useState({});

  // const [truckData, ]

  //   useEffect(() => {
  const location = useLocation();
  const vendorId = new URLSearchParams(location.search).get("id");

  // useEffect(() => {
  //   if (!vendorId) return;
  //   const handle = setTimeout(async () => {
  //     const res = await getPlacesTrucks(vendorId);
  //     if (res.statusText !== "OK") {
  //       console.error("failed to get search results");
  //       return;
  //     }
  //     setTruckData(() =>
  //       res.data.result
  //         //only open food trucks
  //         // .filter(({ business_status }) => business_status === "OPERATIONAL")
  //         // .filter(({ name }) => name !== "Seattle Food Truck .com")
  //         .map(
  //           ({
  //             name,
  //             rating, // formatted_address: address,
  //             vicinity: address,
  //             place_id: googleId,
  //             opening_hours,
  //             website,
  //           }) => ({
  //             googleId,
  //             name,
  //             rating,
  //             address,
  //             website,
  //             isOpen: !!opening_hours?.open_now,
  //           })
  //         )
  //     );
  //   }, 1);
  //   return () => clearTimeout(handle);
  // }, [truckData]);

  // useEffect(() => {
  //   console.log(truckData);
  // }, [truckData]);

  // console.log(vendorId);

  // async ( await ()=>{
  // setTruckData(getTruck(vendorId));
  // .then((res) => {
  //   debugger;
  // });
  // })
  // setTruckData(
  //   async () =>
  //     await getTruck(vendorId).then((res) => {
  //       return res.data.results.map((data) => {
  //         debugger;
  //       });
  //     })
  // );

  //     const handle = setTimeout(async () => {
  //       const res = await getPlacesTrucks(vendorId);
  //   console.log(res);
  //   if (res.statusText !== "OK") {
  //     console.error("failed to get search results");
  //     return;
  //   }
  //   });
  // }

  // useEffect(() => {
  //   // console.log(vendorId);
  //   getPlacesTrucks(vendorId).then((data) => setTruckData(data));
  //   console.log(truckData.data.result);
  // }, [vendorId]);

  return (
    <div className="Trucks">
      {/* TODO: get vendor id and user id to plug in */}
      <TruckCard
        vendorId={new URLSearchParams(location.search).get("id")}
        // userId="abcd"
      />
      {/* <h1>{truckData.data}</h1> */}
      <Review />
    </div>
  );
}

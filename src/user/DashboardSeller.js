import { useState, useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ConnectNav from "../components/ConnectNav";
import { sellerHotels, deleteHotel } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
import { toast } from "react-toastify";

export default function DashboardSeller() {
  const { auth } = useSelector((state) => ({ ...state }));
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadSellersHotels();
  }, []);

  const loadSellersHotels = async () => {
    let { data } = await sellerHotels(auth.token);
    setHotels(data);
  };

  const handleHotelDelete = async (hotelId) => {
    if (!window.confirm("Are you sure")) return;
    deleteHotel(auth.token, hotelId).then((res) => {
      toast.success("Hotel Deleted");
      loadSellersHotels();
    });
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        {/* <h1>Dashboard</h1> */}
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Hotels</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new" className="btn btn-primary">
              {" "}
              + add new
            </Link>
          </div>
        </div>
        <div className="row">
          {hotels.map((h) => (
            <SmallCard
              key={h._id}
              h={h}
              showViewMoreButton={false}
              owner={true}
              handleHotelDelete={handleHotelDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

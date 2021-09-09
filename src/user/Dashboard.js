import React from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              {" "}
              Browse hotels
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

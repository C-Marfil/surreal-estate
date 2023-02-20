/* eslint-disable no-console */
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then(({ data }) => setProperties(data))
      .then(setAlert({ message: "" }))
      .catch(() => {
        setAlert({ message: "Error!" });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyID) => {
    axios.post("http://localhost:3000/api/v1/Favourite", {
      propertyListing: propertyID,
      fbUserId: userID,
    });
  };

  return (
    <>
      <SideBar />
      <div className="properties">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => {
          return (
            <div key={property._id} className="cards">
              <PropertyCard
                className="card"
                {...property}
                userID={userID}
                onSave={handleSaveProperty}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;

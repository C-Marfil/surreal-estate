/* eslint-disable no-console */
import { React, useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
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

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => {
        return (
          <PropertyCard key={property._id} className="cards" {...property} />
        );
      })}
    </div>
  );
};

export default Properties;

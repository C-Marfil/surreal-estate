/* eslint-disable no-console */
import { React, useState } from "react";
import "../styles/add-property.css";
import axios from "axios";
import Alert from "./Alert";

const Properties = () => {
  const initialState = {
    fields: {
      title: "",
      city: "",
      type: "",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const postProperty = async () => {
    console.log(fields);
    try {
      await axios
        .post("http://localhost:3000/api/v1/PropertyListing", fields)
        .then(setAlert({ message: "Success!", isSuccess: true }));
    } catch (error) {
      setAlert({ message: "Error!", isSuccess: false });
      console.log(error);
    }
  };

  const handleAppProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAppProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="form_data--vip">
          <label htmlFor="title">
            Listing Title
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="city">
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              placeholder="City"
            >
              <option>Select City</option>
              <option value="Leeds">Leeds</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor="type">
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option>Property Type</option>
              <option value="flat">Flat</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-Detached</option>
              <option value="terraced">Terraced</option>
              <option value="end-of-terrace">End of Terrace</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form_data--int">
          <label htmlFor="bedrooms">
            Beds
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              placeholder="0"
            />
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              placeholder="0"
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="$0.00"
            />
          </label>
        </div>
        <div className="form_data--email">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="example@gmail.com"
            />
          </label>
        </div>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Properties;

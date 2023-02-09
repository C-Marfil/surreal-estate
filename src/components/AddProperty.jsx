import { React, useState } from "react";
import "../styles/add-property.css";

const Properties = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAppProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAppProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          Select
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            placeholder="City"
          >
            <option value="Leeds">Leeds</option>
            <option value="Manchester">Manchester</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Select
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

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Properties;

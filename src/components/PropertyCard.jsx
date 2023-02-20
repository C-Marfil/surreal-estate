import React from "react";
import PropTypes from "prop-types";

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSave,
}) => {
  const mailto = `mailto:${email}`;

  return (
    <div>
      <p>{title}</p>
      <p>{`${type}, ${city}`}</p>
      <ul>
        <li>bathroom:{bathrooms}</li>
        <li>bedrooms: {bedrooms}</li>
        <li>moneys:${price}</li>
      </ul>
      <p>
        <a href={mailto}>Email</a>
      </p>
      {userID && (
        <button type="button" className="save" onClick={() => onSave(_id)}>
          <i className="fas fa-star" />
          Save
        </button>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default PropertyCard;

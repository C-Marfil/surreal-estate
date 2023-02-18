import React from "react";
import PropTypes from "prop-types";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
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
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;

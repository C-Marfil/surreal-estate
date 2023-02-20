import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <>
      <div className="sidebar">
        <Link
          to={buildQueryString("query", { city: "Manchester" })}
          className="quicklink"
        >
          Manchester
        </Link>
        <Link
          to={buildQueryString("query", { city: "Liverpool" })}
          className="quicklink"
        >
          Liverpool
        </Link>
        <Link
          to={buildQueryString("query", { city: "Sheffield" })}
          className="quicklink"
        >
          Sheffield
        </Link>
        <Link
          to={buildQueryString("query", { city: "Leeds" })}
          className="quicklink"
        >
          Leeds
        </Link>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="quicklink"
        >
          Price
        </Link>
      </div>
      <div className="searchbar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search properties"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">O</button>
        </form>
      </div>
    </>
  );
};

export default SideBar;

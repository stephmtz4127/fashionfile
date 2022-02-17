import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { getSearchTerms, setSearchTerms } from "../reducer/searchSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const designerNavigateUrl = "/designers";

const SearchBar = () => {
  const terms = useSelector(getSearchTerms);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(terms);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (terms) {
      navigate(designerNavigateUrl);
    }
  };

  return (
    <form onSubmit={onSearchSubmit} className="searchContainer">
      <input
        type="text"
        value={terms}
        onChange={(e) => dispatch(setSearchTerms(e.target.value))}
        className="searchInput"
        placeholder="Search for..."
      ></input>
      <button type="submit" className="searchIcon">
        <SearchIcon color="action" />
      </button>
    </form>
  );
};

export default SearchBar;

import React from "react";
import { useDispatch } from "react-redux";
import { searchLogs } from "../../actions/logAction";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(searchLogs(e.target.value));
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs..."
              onChange={searchHandler}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;

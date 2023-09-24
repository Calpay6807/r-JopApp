import React from "react";
import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/jopSlice";

const FilterJop = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterSearch(e.target.value));
  };
  return (
    <div className="search">
      <label htmlFor="">
        <i className="bi bi-search" />
      </label>
      <input onChange={handleChange} type="text" />
    </div>
  );
};

export default FilterJop;

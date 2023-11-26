import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CitySearchResults from "../searchbar/CitySearchResults";

const SearchBar = () => {
  const [showDestinationSelection, setShowDestinationSelection] =
    useState(false);
  return (
    <div className="searchbar">
      <div className="searchbar__frame">
        <button
          onClick={() => {
            setShowDestinationSelection((current) => !current);
          }}
          className="searchbar__frame__destination"
        >
          <p>جستجو شهر، استان</p>
        </button>
        <button className="searchbar__frame__date">زمان</button>
        <button className="searchbar__frame__guests">تعداد نفرات</button>
        <div className="searchbar__icon">
          <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
        </div>
      </div>
      <CitySearchResults showDestinationSelection={showDestinationSelection} />
    </div>
  );
};

export default SearchBar;

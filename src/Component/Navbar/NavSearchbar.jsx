import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PopularCity from "../searchbar/popularCity";

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
      <PopularCity showDestinationSelection={showDestinationSelection} />
    </div>
  );
};

export default SearchBar;

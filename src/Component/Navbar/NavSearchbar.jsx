import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CitySearchResults from "../searchbar/CitySearchResults";
import TimeBookingSection from "../searchbar/TimeBookingSection";

const SearchBar = () => {
  const [showDestinationSelection, setShowDestinationSelection] =
    useState(false);
  const [showTimeBooking, setShowTimeBooking] = useState(false);

  const destinationSelectionHandler = () => {
    setShowDestinationSelection((current) => !current);
    if (showTimeBooking === true) {
      setShowTimeBooking(false);
    }
  };
  const timeBookingHandler = () => {
    setShowTimeBooking((current) => !current);
    if (showDestinationSelection === true) {
      setShowDestinationSelection(false);
    }
  };

  console.log("showDestinationSelection", showDestinationSelection);
  console.log("showTimeBooking", showTimeBooking);
  return (
    <div className="searchbar">
      <div className="searchbar__frame">
        <button
          onClick={destinationSelectionHandler}
          className="searchbar__frame__destination"
        >
          <p>جستجو شهر، استان</p>
        </button>
        <button className="searchbar__frame__date" onClick={timeBookingHandler}>
          زمان
        </button>
        <button className="searchbar__frame__guests">تعداد نفرات</button>
        <div className="searchbar__icon">
          <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
        </div>
      </div>
      <CitySearchResults showDestinationSelection={showDestinationSelection} />
      <TimeBookingSection showTimeBooking={showTimeBooking} />
    </div>
  );
};

export default SearchBar;

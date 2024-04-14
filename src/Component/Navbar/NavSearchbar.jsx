import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CitySearchResults from "../searchbar/CitySearchResults";
import TimeBookingSection from "../searchbar/TimeBookingSection";
import GuestNumber from "../searchbar/GuestNumber";

const SearchBar = () => {
  const [showDestinationSelection, setShowDestinationSelection] =
    useState(false);
  const [showTimeBooking, setShowTimeBooking] = useState(false);
  const [showGuestNumber, setShowGuestNumber] = useState(false);

  const destinationSelectionHandler = () => {
    setShowDestinationSelection((current) => !current);
    if (showTimeBooking === true || showGuestNumber === true) {
      setShowTimeBooking(false);
      setShowGuestNumber(false)
    }
  };
  const timeBookingHandler = () => {
    setShowTimeBooking((current) => !current);
    if (showDestinationSelection === true || showGuestNumber === true) {
      setShowDestinationSelection(false);
      setShowGuestNumber(false)
    }
  };
  const guestNumberHandler = () => {
    setShowGuestNumber((current) => !current);
    if (showDestinationSelection === true || showTimeBooking === true ) {
      setShowDestinationSelection(false);
      setShowTimeBooking(false)
    }
  };

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
        <button onClick={guestNumberHandler} className="searchbar__frame__guests">تعداد نفرات</button>
        <div className="searchbar__icon">
          <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
        </div>
      </div>
      <CitySearchResults showDestinationSelection={showDestinationSelection} />
      <TimeBookingSection showTimeBooking={showTimeBooking} />
      <GuestNumber showGuestNumber={showGuestNumber} />
    </div>
  );
};

export default SearchBar;

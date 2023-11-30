import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


const GuestNumber = ({ showGuestNumber }) => {
    const [numberOfGuests, setNumberOfGuests] = useState(0)

    const decreaseGuests = () => {
        if (numberOfGuests > 0) {
          setNumberOfGuests(numberOfGuests - 1);
        }
      };


  return (
    <>
      {showGuestNumber ? (
        <div className="guest-number">
          <div>تعداد نفرات</div>
          <div className="guest-number__handler">
            <div onClick={()=>{setNumberOfGuests(numberOfGuests+1)}} className="guest-number__handler__plus-icon">
                <PlusIcon className="guest-number__handler__plus-icon__icon" />
            </div>
            <div className="guest-number__handler__show-state">
                {numberOfGuests}
            </div>
            <div onClick={decreaseGuests} className="guest-number__handler__minus-icon">
                <MinusIcon className="guest-number__handler__minus-icon__icon" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GuestNumber;

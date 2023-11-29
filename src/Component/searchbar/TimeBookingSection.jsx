import "./styles/main.scss";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import { useState } from "react";

const TimeBookingSection = ({ showTimeBooking }) => {
//   const [selectTimeState, setSelectTimeState] = useState("in");
  return (
    <>
      {showTimeBooking ? (
        <div className="time-booking">
          {/* <div className="time-booking__select-time-booking">
            <div
              onClick={() => {
                setSelectTimeState("in");
              }}
              className={`time-booking__select-time-booking__in ${
                selectTimeState === "in" ? "selected" : ""
              }`}
            >
              تاریخ ورود
            </div>
            <div
              onClick={() => {
                setSelectTimeState("out");
              }}
              className={`time-booking__select-time-booking__out ${
                selectTimeState === "out" ? "selected" : ""
              }`}
            >
              تاریخ خروج
            </div>
          </div> */}
          <div className="time-booking__date-picker">
            <Calendar
              range
              calendar={persian}
              locale={persian_fa}
              inputClass="custom"
              plugins={[
                <DatePanel position="left" />
              ]}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TimeBookingSection;

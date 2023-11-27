import "./styles/main.scss";

const TimeBookingSection = ({showTimeBooking}) => {
    return ( 
        <>
        {showTimeBooking ? (
            <div className="time-booking">
                <div className="time-booking__select-time-booking">
                    <div className="time-booking__select-time-booking__in">تاریخ ورود</div>
                    <div className="time-booking__select-time-booking__out">تاریخ خروج</div>
                </div>
            </div>
        ) : null}
        </>
     );
}
 
export default TimeBookingSection;
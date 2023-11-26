import { useState } from "react";
import axios from "axios";

import popularCity from "../../data/city.json";
import "./styles/main.scss";
import { MapPinIcon } from "@heroicons/react/24/outline";

const CitySearchResults = (props) => {
  const [cityData, setCityData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    fetchData();
    if (inputValue.length === 0) {
      setCityData([]);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://iran-locations-api.vercel.app/api/v1/cities?state=${inputValue}`
      );
      setCityData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(inputValue.length);
  return (
    <>
      {props.showDestinationSelection ? (
        <div className="select-destination">
          <input
            type="text"
            placeholder="مقصد خود را وارد کنید"
            value={inputValue}
            onChange={handleInputChange}
          />
          <hr />
          {Object.keys(cityData).length &&
          cityData["cities"].length > 0 ? null : (
            <>
              <p className="ppl-ct">محبوبترین مقصد‌ها</p>
              <div className="select-destination__popular-city">
                {popularCity["popularCity"].map((city, index) => (
                  <p key={index}>{city}</p>
                ))}
              </div>
            </>
          )}

          {Object.keys(cityData).length && cityData["cities"].length > 0 ? (
            <div>
              {cityData["cities"].map((city, index) => (
                <div key={index} className="select-destination__state">
                  <div className="select-destination__state__icon">
                    <MapPinIcon className="select-destination__state__icon__MapPinIcon" />
                  </div>
                  <div className="select-destination__state__content">
                    <p className="select-destination__state__content__city">
                      {city.name}
                    </p>
                    <p className="select-destination__state__content__showstate">
                      {cityData["name"]} , ایران
                    </p>
                    <hr className="select-destination__state__content__hr" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default CitySearchResults;

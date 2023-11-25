import { useState } from 'react';
import axios from 'axios';

import popularCity from "../../data/city.json";

const PopularCity = (props) => {

    const [cityData, setCityData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        fetchData()
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

  console.log(cityData)
  return (
    <>
      {props.showDestinationSelection ? (
        <div className="searchbar__select-destination">
          <input
            type="text"
            placeholder="مقصد خود را وارد کنید"
            value={inputValue}
            onChange={handleInputChange}
          />
          <hr />
          <p className="ppl-ct">محبوبترین مقصد‌ها</p>
          <div className="searchbar__select-destination__popular-city">
            {popularCity["popularCity"].map((city, index) => (
              <p key={index}>{city}</p>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PopularCity;

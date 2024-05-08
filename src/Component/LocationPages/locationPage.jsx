import { useParams } from "react-router-dom";

import allData from "../../data/places_with_id.json";
import "./styles/mainStyle.scss";
import TopTitle from "./topTitle";
import ImgSection from "./ImageSection/imgSection";


const LocationPage = () => {
  const params = useParams();
  const page_data = allData[params.state].find(
    (item) => item.id === parseInt(params.id)
  );
  return (
    <div className="main-location-page">
      <TopTitle page_data={page_data} />
      <ImgSection page_data={page_data} />
    </div>
  );
};

export default LocationPage;

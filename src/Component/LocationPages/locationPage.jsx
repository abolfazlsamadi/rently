import { useParams } from "react-router-dom";

import allData from "../../data/places_with_id.json";
import "./styles/mainStyle.scss";
import TopTitle from "./topTitle";
import ImgSection from "./ImageSection/imgSection";
import MainContentLocationPage from "./mainContentLocationPage";
import SidebarContentLocationPage from "./sidebarContentLocationPage";

const LocationPage = () => {
  const params = useParams();
  const page_data = allData[params.state].find(
    (item) => item.id === parseInt(params.id)
  );
  return (
    <div className="main-location-page">
      <TopTitle page_data={page_data} />
      <ImgSection page_data={page_data} />
      <div className="main-location-page__location-all-info">
        <div className="main-location-page__location-all-info__main-content">
          <MainContentLocationPage page_data={page_data} />
        </div>
        <div className="main-location-page__location-all-info__sidebar-content">
          <SidebarContentLocationPage page_data={page_data} />
        </div>
      </div>
    </div>
  );
};

export default LocationPage;

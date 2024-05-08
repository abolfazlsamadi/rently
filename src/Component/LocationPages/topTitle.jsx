import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";


const TopTitle = ({page_data}) => {
  return (
    <div className="main-location-page__top-title">
      <div className="main-location-page__top-title__title-container">
        <p className="main-location-page__top-title__title-container__title">
          {page_data["name"]}
        </p>
      </div>
      <div className="main-location-page__top-title__bottoms-container">
        <div className="main-location-page__top-title__bottoms-container__share-bottom">
          <div className="main-location-page__top-title__bottoms-container__share-bottom__text">
            اشتراک‌گذاری
          </div>
          <div className="main-location-page__top-title__bottoms-container__share-bottom__icon-container">
            <ArrowUpTrayIcon className="main-location-page__top-title__bottoms-container__share-bottom__icon-container__icon" />
          </div>
        </div>
        <div className="main-location-page__top-title__bottoms-container__like-bottom">
          <div className="main-location-page__top-title__bottoms-container__like-bottom__text">
            اضافه به علاقه‌مندی‌ها
          </div>
          <div className="main-location-page__top-title__bottoms-container__like-bottom__icon-container">
            <HeartIcon className="main-location-page__top-title__bottoms-container__like-bottom__icon-container__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTitle;

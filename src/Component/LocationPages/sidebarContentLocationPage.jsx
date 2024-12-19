import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SidebarContentLocationPage = ({ page_data }) => {
  return (
    <div className="main-location-page__location-all-info__sidebar-content__main-container">
      <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container">
        <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section">
          <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__main-price-discount-value">
            <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__main-price-discount-value__discount-value">
              <div>٪</div>
              <div>{page_data["discount"]}</div>
            </div>
            <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__main-price-discount-value__main-price">
              {Intl.NumberFormat().format(page_data["main-price"])}
            </div>
          </div>
          <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__discount-price">
            <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__discount-price__value">
              {Intl.NumberFormat().format(
                (page_data["main-price"] * (100 - page_data["discount"])) / 100
              )}
            </div>
            <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__price-section__discount-price__text">
              تومان / هرشب
            </div>
          </div>
        </div>
        <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__rate-section">
            <StarIcon className="main-location-page__location-all-info__sidebar-content__main-container__top-container__rate-section__icon" />
            <div className="main-location-page__location-all-info__sidebar-content__main-container__top-container__rate-section__value">
              {page_data["rate"]}
            </div>
            <Link to={"/"}>
              <p  className="main-location-page__location-all-info__sidebar-content__main-container__top-container__rate-section__comment-count">(6 نظر)</p>
            </Link>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarContentLocationPage;

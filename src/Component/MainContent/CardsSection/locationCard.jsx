import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { StarIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LocationCard = ({ cardsData }) => {
  return (
    <div className="main-content__showing-cards__card">
      <div className="main-content__showing-cards__card__img-container">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="main-content__showing-cards__card__img-container__swiper"
          slidesPerView={1}
        >
          {Object.entries(cardsData["img-url"]).map(([index, img]) => (
            <SwiperSlide className="main-content__showing-cards__card__img-container__swiper__slide">
              <img
                className="main-content__showing-cards__card__img-container__swiper__slide__img"
                src={img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-content__showing-cards__card__info">
        <div className="main-content__showing-cards__card__info__top-title">
          <div className="main-content__showing-cards__card__info__top-title__title">
            {cardsData["name"]}
          </div>
          <div className="main-content__showing-cards__card__info__top-title__rate">
            <div className="main-content__showing-cards__card__info__top-title__rate__value">
              {cardsData["rate"]}
            </div>
            <StarIcon className="main-content__showing-cards__card__info__top-title__rate__icon" />
          </div>
        </div>
        <div className="main-content__showing-cards__card__info__location">
          {cardsData["location"]}
        </div>
        <div className="main-content__showing-cards__card__info__time">
          {cardsData["open-date"]}
        </div>
        <div className="main-content__showing-cards__card__info__price">
          <div className="main-content__showing-cards__card__info__price__discount-percent">
            <div>٪</div>
            <div>{cardsData["discount"]}</div>
          </div>
          <div className="main-content__showing-cards__card__info__price__main-price">
            {Intl.NumberFormat().format(cardsData["main-price"])}
          </div>
        </div>
        <div className="main-content__showing-cards__card__info__price__discount-price-container">
          <div className="main-content__showing-cards__card__info__price__discount-price-container__value">
            {Intl.NumberFormat().format((cardsData["main-price"] * (100 - cardsData["discount"])) / 100)}
          </div>
          <div className="main-content__showing-cards__card__info__price__discount-price-container__text">تومان / هرشب</div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

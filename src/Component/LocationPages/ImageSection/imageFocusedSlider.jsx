import { XMarkIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const ImageFocusedSlider = ({ closeImgSlider, imgUrls }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-location-page__img-section__img-focused-slider">
      <div className="main-location-page__img-section__img-focused-slider__slider-container">
        <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button">
          <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button">
            <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__share-button">
              <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__share-button__text">
                اشتراک‌گذاری
              </div>
              <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__share-button__icon-container">
                <ArrowUpTrayIcon className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__share-button__icon-container__icon" />
              </div>
            </div>
            <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__like-button">
              <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__like-button__text">
                اضافه به علاقه‌مندی‌ها
              </div>
              <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__like-button__icon-container">
                <HeartIcon className="main-location-page__img-section__img-focused-slider__slider-container__top-button__right-button__like-button__icon-container__icon" />
              </div>
            </div>
          </div>
          <div className="main-location-page__img-section__img-focused-slider__slider-container__top-button__left-button">
            <XMarkIcon
              onClick={closeImgSlider}
              className="main-location-page__img-section__img-focused-slider__slider-container__top-button__left-button__close-icon"
            />
          </div>
        </div>
        <div className="main-location-page__img-section__img-focused-slider__slider-container__main-slider-container">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-location-page__img-section__img-focused-slider__slider-container__main-slider-container__swiper"
          >
            {Object.entries(imgUrls).map(([index, imgUrl]) => (
              <SwiperSlide
                key={index}
                className="main-location-page__img-section__img-focused-slider__slider-container__main-slider-container__swiper__swiper-slider"
              >
                <img
                  src={imgUrl}
                  alt={index}
                  className="main-location-page__img-section__img-focused-slider__slider-container__main-slider-container__swiper__swiper-slider__img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="main-location-page__img-section__img-focused-slider__slider-container__bottom-slider-container">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4.5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-location-page__img-section__img-focused-slider__slider-container__bottom-slider-container__swiper"
          >
            {Object.entries(imgUrls).map(([index, imgUrl]) => (
              <SwiperSlide
                key={index}
                className="main-location-page__img-section__img-focused-slider__slider-container__bottom-slider-container__swiper__swiper-slider"
              >
                <img
                  src={imgUrl}
                  alt={index}
                  className="main-location-page__img-section__img-focused-slider__slider-container__bottom-slider-container__swiper__swiper-slider__img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageFocusedSlider;

import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ImageFocusedSlider from "./imageFocusedSlider";

const ImgSection = ({ page_data }) => {
  const [showImgSlider, setShowImgSlider] = useState(false);

  const openImgSlider = () => {
    setShowImgSlider(true);
    document.body.style.overflow = "hidden";
  };

  const closeImgSlider = () => {
    setShowImgSlider(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="main-location-page__img-section">
      <div className="main-location-page__img-section__img-container-right">
        <img
          onClick={openImgSlider}
          src={page_data["img-url"][1]}
          alt=""
          className="main-location-page__img-section__img-container-right__img-one"
        />
      </div>
      <div className="main-location-page__img-section__img-container-left">
        <div className="main-location-page__img-section__img-container-left__top">
          <img
            onClick={openImgSlider}
            src={page_data["img-url"][2]}
            alt=""
            className="main-location-page__img-section__img-container-left__top__img-two"
          />
          <img
            onClick={openImgSlider}
            src={page_data["img-url"][3]}
            alt=""
            className="main-location-page__img-section__img-container-left__top__img-three"
          />
        </div>
        <div className="main-location-page__img-section__img-container-left__bottom">
          <img
            onClick={openImgSlider}
            src={page_data["img-url"][4]}
            alt=""
            className="main-location-page__img-section__img-container-left__bottom__img-four"
          />
          <img
            onClick={openImgSlider}
            src={page_data["img-url"][5]}
            alt=""
            className="main-location-page__img-section__img-container-left__bottom__img-five"
          />
        </div>
      </div>
      <div className="main-location-page__img-section__more-img-container" onClick={openImgSlider}>
        <p className="main-location-page__img-section__more-img-container__text">
          مشاهده همه تصاویر
        </p>
        <SquaresPlusIcon className="main-location-page__img-section__more-img-container__icon" />
      </div>
      {showImgSlider && (
        <ImageFocusedSlider
          closeImgSlider={closeImgSlider}
          imgUrls={page_data["img-url"]}
        />
      )}
    </div>
  );
};

export default ImgSection;

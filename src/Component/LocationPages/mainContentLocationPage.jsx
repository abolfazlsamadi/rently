import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import hostedPic from "../Assets/hosted-thumb-pic/example-hosted-thumb-pic-01.jpeg";

const MainContentLocationPage = ({ page_data }) => {
  const [showMoreDiscription, setShowMoreDiscription] = useState(false);

  const openModalMoreDisc = () => {
    setShowMoreDiscription(true);
    document.body.style.overflow = "hidden";
  };

  const closeModalMoreDisc = () => {
    setShowMoreDiscription(false);
    document.body.style.overflow = "auto";
  };

  const handleCloseModalMoreDisc = (e) => {
    if (e.target.id === "space-more-discription-wrapper") closeModalMoreDisc();
  };

  return (
    <div className="main-location-page__location-all-info__main-content__main-container">
      <div className="main-location-page__location-all-info__main-content__main-container__title-section">
        <div className="main-location-page__location-all-info__main-content__main-container__title-section__title-text">
          {page_data["location"]}
        </div>
        <div className="main-location-page__location-all-info__main-content__main-container__title-section__info-text">
          ظرفیت ۵ نفر، ۲ خواب، ۴ تخت، ۱ سرویس و حمام
        </div>
      </div>
      <div className="main-location-page__location-all-info__main-content__main-container__hosted-section">
        <div className="main-location-page__location-all-info__main-content__main-container__hosted-section__hosted-img-container">
          <img
            src={hostedPic}
            alt="hosted"
            className="main-location-page__location-all-info__main-content__main-container__hosted-section__hosted-img-container__img"
          />
        </div>
        <div className="main-location-page__location-all-info__main-content__main-container__hosted-section__hosted-info-container">
          <div className="main-location-page__location-all-info__main-content__main-container__hosted-section__hosted-info-container__hosted-name">
            به میزبانی علی رضایی
          </div>
          <div className="main-location-page__location-all-info__main-content__main-container__hosted-section__hosted-info-container__hosted-history">
            با دو سال سابقه
          </div>
        </div>
      </div>
      <div className="main-location-page__location-all-info__main-content__main-container__space-discription">
        <div className="main-location-page__location-all-info__main-content__main-container__space-discription__title-container">
          <div className="main-location-page__location-all-info__main-content__main-container__space-discription__title-container__title-text">
            توضیحات فضا
          </div>
        </div>
        <div className="main-location-page__location-all-info__main-content__main-container__space-discription__main-text-container">
          <p className="main-location-page__location-all-info__main-content__main-container__space-discription__main-text-container__main-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
            <br /> <br />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
            <br /> <br />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
            <br /> <br />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
        </div>
        <div
          onClick={openModalMoreDisc}
          className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription"
        >
          <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__text">
            توضیحات بیشتر
          </div>
          <ChevronLeftIcon className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__icon" />
        </div>
        {showMoreDiscription && (
          <div
            id="space-more-discription-wrapper"
            onClick={handleCloseModalMoreDisc}
            className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container"
          >
            <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal">
              <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__close-icon-section">
                <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__close-icon-section__close-icon-container">
                  <XMarkIcon
                    onClick={closeModalMoreDisc}
                    className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__close-icon-section__close-icon-container__icon"
                  />
                </div>
              </div>
              <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__content">
                <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__content__title">
                  درباره این فضا
                </div>
                <div className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__content__text-container">
                  <p className="main-location-page__location-all-info__main-content__main-container__space-discription__more-discription__modal-container__modal__content__text-container__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    <br /> <br />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    <br /> <br />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    <br /> <br />
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContentLocationPage;

import "./styles/mainStyle.scss";
import logo from "../Assets/logo-png-1.png";
import instagramIcon from "../Assets/icon/Instagram-logo-black.png";
import telegramIcon from "../Assets/icon/telegram-logo-black.png";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__main-content-container">
        <div className="main-footer__main-content-container__reservation">
          <p className="main-footer__main-content-container__reservation__text">
            نحوه رزرو اقامتگاه
          </p>
          <ul className="main-footer__main-content-container__reservation__list-container">
            <li>راهنمای رزرو اقامتگاه</li>
            <li>شیوه‌های پرداخت</li>
            <li>لغو رزرو</li>
          </ul>
        </div>
        <div className="main-footer__main-content-container__customer-service">
          <p className="main-footer__main-content-container__customer-service__text">
            خدمات مشتریان
          </p>
          <ul className="main-footer__main-content-container__customer-service__list-container">
            <li>پرسش‌های متداول مهمان</li>
            <li>پرسش‌های متداول میزبان</li>
            <li>چطور اقامتگاه ثبت کنم؟</li>
            <li>حریم شخصی کاربران</li>
          </ul>
        </div>
        <div className="main-footer__main-content-container__with-rently">
          <p className="main-footer__main-content-container__with-rently__text">
            با رنت‌لی
          </p>
          <ul className="main-footer__main-content-container__with-rently__list-container">
            <li>وبلاگ رنت‌لی</li>
            <li>درباره رنت‌لی</li>
            <li>راه‌های تماس با رنت‌لی</li>
            <li>قوانین رنت‌لی</li>
          </ul>
        </div>
        <div className="main-footer__main-content-container__brand-info">
          <div className="main-footer__main-content-container__brand-info__img-container">
            <img
              src={logo}
              alt="logo"
              className="main-footer__main-content-container__brand-info__img-container__img"
            />
          </div>
          <div className="main-footer__main-content-container__brand-info__social-title">
            رنت‌لی را در شبکه‌های اجتماعی دنبال کنید:
          </div>
          <div className="main-footer__main-content-container__brand-info__social-link">
            <a href="/" className="main-footer__main-content-container__brand-info__social-link__instagram-link">
              <img src={instagramIcon} alt="instagramIcon" className="main-footer__main-content-container__brand-info__social-link__instagram-link__icon" />
            </a>
            <a href="/" className="main-footer__main-content-container__brand-info__social-link__telegram-link">
              <img src={telegramIcon} alt="telegramIcon" className="main-footer__main-content-container__brand-info__social-link__telegram-link__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

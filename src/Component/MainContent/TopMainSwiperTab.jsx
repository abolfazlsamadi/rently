const TopMainSwiperTab = ({iconUrl, title, selected}) => {
    return ( 
        <div className="main-content__top-main__swiper__swiper-slide__tab">
            <div className="main-content__top-main__swiper__swiper-slide__tab__icon-container">
                <img src={iconUrl} alt={title} className="main-content__top-main__swiper__swiper-slide__tab__icon-container__icon" />
            </div>
            <div className="main-content__top-main__swiper__swiper-slide__tab__title-container">
                <p className="main-content__top-main__swiper__swiper-slide__tab__title-container__title">{title}</p>
            </div>
        </div>
     );
}
 
export default TopMainSwiperTab;
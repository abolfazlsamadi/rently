const TopMainSwiperTab = ({iconUrl, title, selected, name}) => {
    return ( 
        <div className={`main-content__top-main__swiper__swiper-slide__${name}__tab`}>
            <div className={`main-content__top-main__swiper__swiper-slide__${name}__tab__icon-container`}>
                <img src={iconUrl} alt={title} className={`main-content__top-main__swiper__swiper-slide__${name}__tab__icon-container__icon`} />
            </div>
            <div className={`main-content__top-main__swiper__swiper-slide__${name}__tab__title-container`}>
                <p className={`main-content__top-main__swiper__swiper-slide__${name}__tab__title-container__title`}>{title}</p>
            </div>
        </div>
     );
}
 
export default TopMainSwiperTab;
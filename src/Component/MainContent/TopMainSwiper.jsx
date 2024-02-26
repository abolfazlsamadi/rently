import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";
import { useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import TopMainSwiperTab from './TopMainSwiperTab';
import { useDispatch } from 'react-redux';
import { changeShowingContent } from '../../redux/locationStateSlice';



const TopMainSwiper = () => {
    const dispatch = useDispatch()
    const locationState = useSelector((state) => state.locationState.value)
    console.log(locationState)

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper main-content__top-main__swiper" slidesPerView={13}>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('trending'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__trending ${locationState === 'trending' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"} title={"محبوبترین ها"} name={"trending"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('front-beach'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__front-beach ${locationState === 'front-beach' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"} title={"ساحلی"} name={"front-beach"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('villa'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__villa ${locationState === 'villa' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"} title={"ویلا"} name={"villa"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('villa-with-pool'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__villa-with-pool ${locationState === 'villa-with-pool' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"} title={"ویلا استخر"} name={"villa-with-pool"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('cabins'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__cabins ${locationState === 'cabins' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} title={"کلبه"} name={"cabins"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('good-views'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__good-views ${locationState === 'good-views' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"} title={"منظره خوب"} name={"good-views"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('tree-houses'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__tree-houses ${locationState === 'tree-houses' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"} title={"کلبه درختی"} name={"tree-houses"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('luxury'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__luxury ${locationState === 'luxury' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"} title={"لوکس"} name={"luxury"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('rooms'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__rooms ${locationState === 'rooms' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"} title={"سوئیت"} name={"rooms"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('hotels'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__hotels ${locationState === 'hotels' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"} title={"هتل"} name={"hotels"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('modern-villa'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__modern-villa ${locationState === 'modern-villa' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"} title={"ویلا مدرن"} name={"modern-villa"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('ecotourism'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__ecotourism ${locationState === 'ecotourism' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"} title={"بومگردی"} name={"ecotourism"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('offer'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__offer ${locationState === 'offer' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://cdn-icons-png.flaticon.com/512/2956/2956869.png"} title={"تخفیف دار"} name={"offer"} selected={false} />
        </SwiperSlide>
        <SwiperSlide onClick={() => dispatch(changeShowingContent('apartment'))} className={`mySwiper main-content__top-main__swiper__swiper-slide__apartment ${locationState === 'apartment' ? 'top-main-tab-selected' : null}`}>
            <TopMainSwiperTab iconUrl={"https://cdn-icons-png.flaticon.com/512/5792/5792154.png"} title={"آپارتمان"} name={"apartment"} selected={false} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopMainSwiper;

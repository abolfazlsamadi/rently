import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import TopMainSwiperTab from './TopMainSwiperTab';


const TopMainSwiper = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper main-content__top-main__swiper" slidesPerView={13}>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"} title={"محبوبترین ها"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"} title={"ساحلی"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"} title={"ویلا"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"} title={"ویلا استخر"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} title={"کلبه"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"} title={"منظره خوب"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"} title={"کلبه درختی"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"} title={"لوکس"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"} title={"سوئیت"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"} title={"هتل"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"} title={"ویلا مدرن"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"} title={"بومگردی"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://cdn-icons-png.flaticon.com/512/2956/2956869.png"} title={"تخفیف دار"} selected={false} />
        </SwiperSlide>
        <SwiperSlide className="mySwiper main-content__top-main__swiper__swiper-slide">
            <TopMainSwiperTab iconUrl={"https://cdn-icons-png.flaticon.com/512/5792/5792154.png"} title={"آپارتمان"} selected={false} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopMainSwiper;

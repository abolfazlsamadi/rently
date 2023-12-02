import FilterContentSection from "./FilterContentSection";
import TopMainSwiper from "./TopMainSwiper";

const TopMain = () => {
    return ( 
        <div className="main-content__top-main">
            <TopMainSwiper />
            <FilterContentSection />
        </div>
     );
}
 
export default TopMain;
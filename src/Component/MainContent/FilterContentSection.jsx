import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const FilterContentSection = () => {
    return ( 
        <div className="main-content__top-main__filter-container">
            <div className="main-content__top-main__filter-container__icon-container">
                <AdjustmentsHorizontalIcon className="main-content__top-main__filter-container__icon-container__icon" />
            </div>
            <div  className="main-content__top-main__filter-container__text">مرتب سازی</div>
        </div>
     );
}
 
export default FilterContentSection;
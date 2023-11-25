import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBar = () => {
    return ( 
        <div className="searchbar">
            <div className="searchbar__icon">
                <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
            </div>
            <div className="searchbar__guests">
                تعداد نفرات
            </div>
            <div className="searchbar__date">
                زمان
            </div>
            <div className="searchbar__destination">
                مقصد
            </div>
        </div>
     );
}
 
export default SearchBar;
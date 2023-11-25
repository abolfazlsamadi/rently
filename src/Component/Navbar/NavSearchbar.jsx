import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__frame">
        <div className="searchbar__icon">
          <MagnifyingGlassIcon className="MagnifyingGlassIcon" />
        </div>
        <button className="searchbar__frame__guests">تعداد نفرات</button>
        <button className="searchbar__frame__date">زمان</button>
        <button className="searchbar__frame__destination">مقصد</button>
      </div>
    </div>
  );
};

export default SearchBar;

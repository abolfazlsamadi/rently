const SidebarContentLocationPage = ({ page_data }) => {
  return (
    <div className="main-location-page__location-all-info__sidebar-content__main-container">
      <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section">
        <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__main-price-discount-value">
          <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__main-price-discount-value__discount-value">
            <div>٪</div>
            <div>{page_data["discount"]}</div>
          </div>
          <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__main-price-discount-value__main-price">
            {Intl.NumberFormat().format(page_data["main-price"])}
          </div>
        </div>
        <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__discount-price">
          <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__discount-price__value">
            {Intl.NumberFormat().format(
              (page_data["main-price"] * (100 - page_data["discount"])) / 100
            )}
          </div>
          <div className="main-location-page__location-all-info__sidebar-content__main-container__price-section__discount-price__text">
            تومان / هرشب
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarContentLocationPage;

import TopMain from "./TopMain";
import "./styles/style.scss";
import ShowingCards from "./CardsSection/ShowingCards";


const MainContent = () => {
  return (
    <div className="main-content">
      <TopMain />
      <ShowingCards />
    </div>
  );
};

export default MainContent;

import Navbar from "./Component/Navbar/Navbar";
import MainContent from "./Component/MainContent/MainContent";
import LocationPage from "./Component/LocationPages/locationPage";
import "./Styles/App.scss";
import MainFooter from "./Component/Footer/footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/rooms/:state/:id' element={<LocationPage />} />
      </Routes>
      <MainFooter />
    </div>
  );
};

export default App;

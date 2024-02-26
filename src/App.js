import Navbar from "./Component/Navbar/Navbar";
import MainContent from "./Component/MainContent/MainContent";
import "./Styles/App.scss"
import MainFooter from "./Component/Footer/footer";

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <MainContent />
            <MainFooter />
        </div>
    )
}

export default App;
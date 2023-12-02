import Navbar from "./Component/Navbar/Navbar";
import MainContent from "./Component/MainContent/MainContent";
import "./Styles/App.scss"

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <MainContent />
        </div>
    )
}

export default App;
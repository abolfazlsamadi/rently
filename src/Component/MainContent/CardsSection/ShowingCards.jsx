import LocationCard from "./locationCard";
import "./styles/mainStyle.scss";
import allData from "../../../data/places.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShowingCards = () => {

    const locationState = useSelector((state) => state.locationState.value)
    const [data, setData] = useState([])

    useEffect(() => {
        if (locationState === "trending"){
            setData(allData["trending"])
        }else if (locationState === "front-beach"){
            setData(allData["front-beach"])
        }else if (locationState === "villa"){
            setData(allData["villa"])
        }else if (locationState === "villa-with-pool"){
            setData(allData["villa-with-pool"])
        }else if (locationState === "cabins"){
            setData(allData["cabins"])
        }else if (locationState === "good-views"){
            setData(allData["good-views"])
        }else if (locationState === "tree-houses"){
            setData(allData["tree-houses"])
        }else if (locationState === "luxury"){
            setData(allData["luxury"])
        }else if (locationState === "rooms"){
            setData(allData["rooms"])
        }else if (locationState === "hotels"){
            setData(allData["hotels"])
        }else if (locationState === "modern-villa"){
            setData(allData["modern-villa"])
        }else if (locationState === "ecotourism"){
            setData(allData["ecotourism"])
        }else if (locationState === "offer"){
            setData(allData["offer"])
        }else if (locationState === "apartment"){
            setData(allData["apartment"])
        }
      }, [locationState]);


    return ( 
        <div className="main-content__showing-cards">
            {data.map((data) => (
                <LocationCard cardsData={data} />
            ))}
        </div>
     );
}
 
export default ShowingCards;
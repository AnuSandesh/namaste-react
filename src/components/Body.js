import RestrurantCard from "./RestrurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentListData, setRestaurentListData] = useState([]);
  const [filteredListData, setFilteredListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional chaining
    setRestaurentListData(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListData(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  //rendering according to condition is called renering
  // if (restaurentListData.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurentListData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const sRest = restaurentListData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("Searched rest", sRest);
              setFilteredListData(sRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Top Rated Restaurent Filter");
            resList = restaurentListData.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurentListData(resList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurent-container">
        {filteredListData.map((restaurent) => (
          <RestrurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;

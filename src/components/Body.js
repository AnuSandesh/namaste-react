import RestrurantCard from "./RestrurantCard";
import restaurentList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurentListData, setRestaurentListData] = useState(restaurentList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Top Rated Restaurent Filter");
          resList = restaurentListData.filter((res) => res.info.avgRating > 4);
          setRestaurentListData(resList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurent-container">
        {restaurentListData.map((restaurent) => (
          <RestrurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;

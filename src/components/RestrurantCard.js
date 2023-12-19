import { CDN_URL } from "../utils/constants";

const RestrurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
    sla,
  } = resData?.info;
  const { slaString } = sla;

  return (
    <div className="restaurent-card">
      <img
        className="res-card-image"
        alt="res-card-image-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRatingString} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

export default RestrurantCard;

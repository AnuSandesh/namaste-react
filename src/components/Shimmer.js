const Shimmer = () => {
  const numberOfShimmerCards = 15;
  const shimmerCards = [];
  for (let i = 0; i < numberOfShimmerCards; i++) {
    shimmerCards.push(
      <div key={"shimmer-card" + i} className="shimmer-card">
        <img className="shimmer-card-image"></img>
        <h3></h3>
      </div>
    );
  }

  return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;

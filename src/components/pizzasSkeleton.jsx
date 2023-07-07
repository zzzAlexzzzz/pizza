import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f2eeee"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="131" r="105" />
    <rect x="24" y="248" rx="0" ry="0" width="230" height="27" />
    <rect x="167" y="334" rx="0" ry="0" width="11" height="0" />
    <rect x="2" y="288" rx="0" ry="0" width="280" height="88" />
    <rect x="11" y="403" rx="0" ry="0" width="91" height="27" />
    <rect x="122" y="392" rx="0" ry="0" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

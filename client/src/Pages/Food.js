import React from "react";
import GoogleMapFood from "../components/GoogleMap/GoogleMapFood";
const Food = () => {
  return (
    <div className="mapWrapper">
      <h1>Food Map</h1>
      <iframe
        className="Googlemap"
        src="https://www.google.com/maps/d/embed?mid=1uVjjVxXfLFU4R6V7qjXXRoxCy-IwfMSP"
        width="100%"
        height="380"
        frameBorder="10px"
      ></iframe>
    </div>
  );
};

export default Food;

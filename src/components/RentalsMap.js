import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect } from "react";

function RentalsMap({locations, google}) {
  const [center, setCenter] = useState();

  useEffect(() => {
    let arr = Object.keys(locations);
    let getLat = (key) => locations[key]["lat"];
    let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

    let getLng = (key) => locations[key]["lng"];
    let avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

    setCenter({ lat: avgLat, lng: avgLng });

  }, [locations]);

  return (
    <>
    {center && (
      <Map
        google={google}
        containerStyle={{
          width: "50vw",
          height: "calc(100vh - 135px)",
        }}
        zoom={13}
        initialCenter={locations[0]}
        center={center}
        disableDefaultUI={true}
      >
      </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "",
})(RentalsMap);

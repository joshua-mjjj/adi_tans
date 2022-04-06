import React from "react";

const useLocation = () => {
  const [location_save, setLocation] = React.useState({
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    const latit = location.coords.latitude;
    const long = location.coords.longitude;
    localStorage.setItem("cords_lat", latit);
    localStorage.setItem("cords_lon", long);
  };

  const onError = (error) => {
    if(error){
      if(error.code === 1){
        console.log(error)
        localStorage.removeItem("cords_lat");
        localStorage.removeItem("cords_lon");
      }
    }
   }


  React.useEffect(() => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation not supported");
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location_save;
}

export default useLocation;
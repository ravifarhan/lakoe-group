import { useEffect, useState } from "react";

interface LocationState {
  loaded: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
  error?: {
    code: number;
    message: string;
  };
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
  });

  const onSuccess = (position: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;

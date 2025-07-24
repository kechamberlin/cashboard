import { Geolocation } from '@/lib/definitions';

const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export const getGeolocation = async () => {
  const response = await fetch(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=${googleApiKey}`,
    { method: 'POST' }
  );
  if (!response.ok) {
    throw new Error('Unable to fetch geolocation coordinates.');
  }
  return response.json();
};

export const getWeather = async (geolocation: Geolocation) => {
  const response = await fetch(
    `https://weather.googleapis.com/v1/currentConditions:lookup?key=${googleApiKey}&location.latitude=${geolocation?.location?.lat}&location.longitude=${geolocation?.location?.lng}&unitsSystem=IMPERIAL`
  );
  if (!response.ok) {
    throw new Error('Unable to fetch weather data.');
  }
  return response.json();
};

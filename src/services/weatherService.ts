export async function getWeatherByCoordinates(
    latitude: number,
    longitude: number
  ) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    );
  
    const data = await response.json();
  
    return data;
  }
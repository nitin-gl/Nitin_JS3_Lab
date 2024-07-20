

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "3acd17fbbb7adee6673188eb54740343"

class WeatherAPI {

  constructURL(locationName){

    // Use the base url
    this.url = new URL(BASE_URL)

    this.url.searchParams.append("q", locationName)
    this.url.searchParams.append("appid", APP_ID)
    this.url.searchParams.append("units", "metric")

    console.log(this.url.toString())

    return this.url.toString();
  }

  async invokeURL(){

    // 0.5, 0.4
    const responseObj = await fetch(this.url.toString());

    const responseContentInJSON = await responseObj.json();

    return responseContentInJSON;
  }

}

export {WeatherAPI}
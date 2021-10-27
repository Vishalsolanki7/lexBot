'use strict';
const axios = require("axios"); //library needed to send req to API

module.exports.getWeather = async (event) => {
  const city = event.currentIntent.slots["City"]; // from user
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=08e3ad0437282f0abefa56ee74ab56af";
  // url + city from user + unit + api key
  try {
    const response = await axios.get(url);
    const data = response.data; //get API data 

    const answer = "The temperature is " + data.main.temp + "C and Humidity is " + data.main.humidity + "% and " + data.weather[0].description + " is expected.";
    //respond to user with latest info
    return { // proper structure format needed by lex
      "sessionAttributes": {}, // if user responds then need it to store city name in session attribute
      "dialogAction": {
        "type": "Close",// if conversation is expected from user else "close"
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": answer//variable
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
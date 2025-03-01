# Weather App

<div align="center">
  <img alt="Demo" src="/public/sample.png" />
</div>

## Overview
A simple and interactive weather application that allows users to get current weather information for any location. The app fetches real-time data from a weather API and displays key details such as temperature, humidity, wind speed, and weather conditions.

## Features

- **Real-time Weather Data**: Get live updates about the weather based on your location or a search query.
- **Location Search**: Search for any city to view the weather forecast.
- **Responsive UI**: The app is designed to work smoothly across all devices, ensuring a great user experience.
- **Clear and Interactive Design**: Easy-to-use interface with clear data presentation.

## Technologies Used

- **HTML5**: Structure and content of the web pages.
- **CSS3**: Styling for the user interface.
- **JavaScript**: Logic for fetching and displaying weather data.
- **OpenWeather API**: Provides real-time weather information.

## Using the App
1. Enter a city name in the search bar.
2. The app will fetch and display the current weather conditions, including:
    - Temperature
    - Weather condition (clear, cloudy, rainy, etc.)
    - Humidity
    - Wind speed

## How to Run the Weather App Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- An active internet connection.

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/jaykhandla/Weather-App.git
2. Navigate to the project directory:
   ```bash
   cd Weather-App
3. Open index.html in your preferred web browser.

## API Key Setup

To fetch weather data, this app uses the OpenWeather API. You can sign up on OpenWeather to get your own API key.
1. Go to the OpenWeather API page and sign up for an API key.
2. Once you have your API key, replace the placeholder in script.js with your personal API key:
   ```bash
   const apiKey = 'YOUR_API_KEY'
3. Save the changes, and now your app will be able to fetch live weather data.

## Live Demo

You can view the live demo of this effect hosted on GitHub Pages [here](https://jay-weather-app.vercel.app/).
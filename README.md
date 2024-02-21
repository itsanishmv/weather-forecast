Weather Forecast Web App

This is a simple weather forecast web application built using React.js. It allows users to check the current weather conditions and the forecast for the next few days for a specific location.

Features:

- View the current weather conditions including temperature, humidity, wind speed, and weather description.
- Get a 5-day weather forecast including minimum and maximum temperatures, and weather descriptions.
- Search for weather information for any location worldwide.
- Responsive design for seamless experience across devices.

Technologies Used:

- React.js
- OpenWeatherMap API

Installation:

1. Clone the repository:

   git clone https://github.com/your-username/weather-forecast-app.git

2. Navigate to the project directory:

   cd weather-forecast-app

3. Install dependencies:

   npm install

4. Create an account on OpenWeatherMap and obtain an API key.

5. Create a .env file in the root directory of the project and add your API key:

   REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key-goes-here

6. Start the development server:

   npm start

7. Open your browser and navigate to http://localhost:3000 to view the app.

Usage:

- Enter the name of the location you want to check the weather for in the search bar and press Enter or click the search button.
- The current weather conditions and 5-day forecast will be displayed for the specified location.
- You can search for weather information for multiple locations.

Deployment:

To deploy the app to production, you can build the project:

   npm run build

This will create a build folder containing optimized production-ready files that can be deployed to a web server.

Contributing:

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

License:

This project is licensed under the MIT License.

Acknowledgements:

- Weather data provided by OpenWeatherMap.
- This project was created as a part of learning React.js.

# Nest.js Weather API Project

This project fetches weather data from [OpenWeatherMap API](https://openweathermap.org/api/one-call-3#current) and stores it in a PostgreSQL database. It provides two accessible APIs:

1. **POST API**:

   - Endpoint: `/api/weather-data`
   - Description: Accepts latitude (`lat`), longitude (`lon`), and part (`part`) parameters. Retrieves data from the OpenWeatherMap API and stores it in the database.
   - Request Body:
     ```json
     {
       "lat": 12.34,
       "lon": 56.78,
       "part": ["alerts"]
     }
     ```
   - Response: Status 200 if successful, otherwise appropriate error status.

2. **GET API**:
   - Endpoint: `/api/weather-data`
   - Description: Accepts latitude (`lat`), longitude (`lon`), and part (`part`) parameters. Retrieves data from the database based on these parameters and returns it in the following format:
     ```json
     {
       "sunrise": 1684926645,
       "sunset": 1684977332,
       "temp": 292.55,
       "feels_like": 292.87,
       "pressure": 1014,
       "humidity": 89,
       "uvi": 0.16,
       "wind_speed": 3.13
     }
     ```
   - Response: Status 200 with the formatted weather data if successful, otherwise appropriate error status.

## Installation and Running

1. Clone this repository.
2. Add .env variables in the following format:
   ```
   POSTGRES_PASSWORD=postgres
   DB_HOST=db
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB=postgres
   OPEN_WEATHER_MAP_API_KEY=your_key
   ```
3. Install dependencies: `npm install`.
4. Build the project: `npm run build`.
5. Run the project in Docker: `docker-compose up`.

## Usage

- Access the APIs using a tool like Postman or curl.
- POST API Example:
  ```bash
  curl -X POST http://localhost:3000/api/weather -H "Content-Type: application/json" -d '{"lat": 12.34, "lon": 56.78, "part": ["alerts"]}'
  ```

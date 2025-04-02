import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Location  } from '@/modules/location/.main/location.entity'
import { Button } from '@/components/base/button'
import { WeatherCard } from '@/modules/weather/.ui/weatherCard'
import { weatherService } from '@/modules/weather/.main/weather.service'



export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const CITIES = Location.CITIES
  type CityT = Location.CityT

  /* const location: LocationT = {
    country: 'Brazil',
    city: 'Joinville',
  }

  const weather: WeatherT = {
    temperature: 25,
    windSpeed: 10,
    humidity: 60,
    pressure: '1 015 hPa',
  } */

  const [selectedCityId, setSelectedCityId] = useState<CityT['id']>(1)
  const selectedCity = Location.getCityById(selectedCityId)

  const { data: weatherRes } = useQuery(
    weatherService.getWeatherInfo(selectedCity!.lat, selectedCity!.lon),
  )

  const tempRes = weatherRes?.weather.temperature

  return (
    <section className="my-12 items-center text-center">
      <div className="f-col gap-1">
        <small className="place-self-start opacity-60">Select the location</small>

        <div
          className={
            'f-row gap-2 rounded-md border-1 bg-primary/10 p-1 '
            + '*:not-aria-selected:hover:bg-primary/35'
          }
        >
          {CITIES.map((city) => (
            <Button
              key={city.id}
              variant={city.id === selectedCityId ? 'default' : 'ghost'}
              aria-selected={city.id === selectedCityId}
              onClick={() => setSelectedCityId(city.id)}
            >
              {city.label} {city.country}
            </Button>
          ))}
        </div>
      </div>

      {weatherRes && selectedCity && tempRes && (
        <WeatherCard
          period="day"
          climate={tempRes <= 5 ? 'cold' : tempRes > 5 && tempRes <= 25 ? 'normal' : 'hot'}
          condition={weatherRes.condition}
          location={{ city: selectedCity.label, country: selectedCity.country }}
          weather={weatherRes.weather}
        />
      )}

      {/* <div className="f-row gap-4">
        <WeatherCard
          period="day"
          climate="cold"
          condition={CONDITIONS.rainy}
          location={location}
          weather={weather}
        />
        <WeatherCard
          period="day"
          climate="normal"
          condition={CONDITIONS.cloudy}
          location={location}
          weather={weather}
        />
        <WeatherCard
          period="day"
          climate="hot"
          condition={CONDITIONS.clear}
          location={location}
          weather={weather}
        />
      </div>
      <div className="f-row gap-4">
        <WeatherCard
          period="night"
          climate="cold"
          condition={CONDITIONS.rainy}
          location={location}
          weather={weather}
        />
        <WeatherCard
          period="night"
          climate="normal"
          condition={CONDITIONS.cloudy}
          location={location}
          weather={weather}
        />
        <WeatherCard
          period="night"
          climate="hot"
          condition={CONDITIONS.clear}
          location={location}
          weather={weather}
        />
      </div> */}
    </section>
  )
}

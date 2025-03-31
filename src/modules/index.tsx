import { createFileRoute } from '@tanstack/react-router'
import type { WeatherT } from '@/domain/weather'
import { Button } from '@/components/base/button'
import { WeatherCard } from '@/components/ui/weatherCard'



export const Route = createFileRoute('/')({
  component: App,
})


function App() {
  const weather: WeatherT = {
    country: 'Brazil',
    city: 'Joinville / SC',
    temperature: 25,
    windSpeed: 10,
    humidity: 60,
    pressure: '1 015 hPa',
  }

  return (
    <section className="items-center text-center">
      <h1> Home </h1>
      <Button>test</Button>

      <div className="f-row gap-4">
        <WeatherCard weather={weather} variant="coldDay" />
        <WeatherCard weather={weather} variant="normalDay" />
        <WeatherCard weather={weather} variant="hotDay" />

      </div>

    </section>
  )
}

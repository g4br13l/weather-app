import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { WeatherT } from '@/domain/weather'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import cloudyDay from '@/../public/weather/day/cloudy-2-day.svg'



const cardVariants = cva(
  'f-col max-w-sm min-w-xs gap-6 rounded-xl p-10 border-1 *:font-semibold **:justify-center ' +
  '',
  {
    variants: {
      variant: {
        coldDay: 'bg-linear-to-br/oklch from-blue-600 via-cyan-600 to-blue-600 ' +
          'border-cyan-600 d',
        normalDay: 'bg-linear-to-br/oklch from-amber-800 via-yellow-600 to-amber-800 ' +
          'border-yellow-600',
        hotDay: 'bg-linear-to-br/oklch from-rose-800 via-pink-600 to-rose-800 ' +
          'border-pink-600',
      },
    },
    defaultVariants: {
      variant: 'coldDay',
      /* size: 'default', */
    },
  }
)


type WeatherCardPropsT = {
  weather: WeatherT
} & ComponentProps<'div'>
  & VariantProps<typeof cardVariants>



export function WeatherCard({ weather, className, variant, ...props }: WeatherCardPropsT) {

  return (

    <div className={cn(cardVariants({ variant, className }))} {...props}>

      <div className="*:font-semibold">
        <h1> {weather.temperature}º</h1>
        <span> Joinville / SC (Brazil) </span>
      </div>

      <div className="f-col items-center">
        <img src={cloudyDay} alt="cloudy" className="w-32" />
      </div>

      <div className="f-row *:font-normal">
        <div>
          <p>{weather.windSpeed} km/h</p>
          <small>Wind</small>
        </div>
        <div>
          <p>{weather.humidity}%</p>
          <small>Humidity</small>
        </div>
        <div>
          <p>{weather.pressure}</p>
          <small>Pressure</small>
        </div>
      </div>

    </div>

  )
}

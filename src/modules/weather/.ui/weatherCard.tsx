import { cva } from 'class-variance-authority'
import { CircleGauge, Droplet, Wind } from 'lucide-react'
import type { VariantProps } from 'class-variance-authority'
import type { WeatherT } from '@/modules/weather/.main/weather.entity'
import type { ComponentProps } from 'react'
import type { LocationT } from '@/modules/location/.main/location.entity'
import type { Condition } from '@/main/type/conditions'
import { cn } from '@/lib/utils'



type ConditionT = Condition.ConditionT

const cardVariants = cva(
  'f-col w-full max-w-sm min-w-xs gap-6 rounded-xl border-1 px-5 py-10 ' +
  'shadow-md',
  {
    variants: {
      climate: { cold: '', normal: '', hot: '' },
      period: { day: '', night: '' },
    },
    compoundVariants: [
      {
        period: 'day',
        climate: 'cold',
        className:
          'bg-linear-to-br/oklch from-blue-700 via-cyan-600 to-blue-700 ' +
          'border-cyan-600'
      },
      {
        period: 'day',
        climate: 'normal',
        className:
          'bg-linear-to-br/oklch from-amber-700 via-yellow-600 to-amber-700 ' +
          'border-yellow-600'
      },
      {
        period: 'day',
        climate: 'hot',
        className:
          'bg-linear-to-br/oklch from-rose-800 via-pink-700 to-rose-800 ' +
          'border-pink-600'
      },
      {
        period: 'night',
        climate: 'cold',
        className:
          'bg-linear-to-br/oklch from-blue-950 via-indigo-900 to-blue-950 ' +
          'border-indigo-800'
      },
      {
        period: 'night',
        climate: 'normal',
        className:
          'bg-linear-to-br/oklch from-yellow-950 via-amber-900 to-yellow-950 ' +
          'border-amber-800'
      },
      {
        period: 'night',
        climate: 'hot',
        className:
          'bg-linear-to-br/oklch from-rose-950 via-rose-900 to-rose-950 ' +
          'border-rose-900'
      }
    ],
    defaultVariants: {
      period: 'day',
      climate: 'normal',
    },
  },
)


export type WeatherCardPropsT = {
  location: LocationT
  weather: WeatherT
  condition: ConditionT
} & ComponentProps<'div'>
  & VariantProps<typeof cardVariants>



export function WeatherCard({
  period,
  climate,
  location,
  weather,
  condition,
  className,
  ...props
}: WeatherCardPropsT) {

  const conditionImg = `/weather/${ period }/${ condition.label +'-'+ period +'.svg' }`


  return (
    <div
      className={cn(cardVariants({ period, climate, className }))}
      {...props}
    >
      <div>
        <span className="font-semibold">
          {location.city}
        </span>
        <h1 className="font-semibold">
          {weather.temperature}º
        </h1>
        <span className="opacity-65">
          {climate}
        </span>
      </div>

      <div className="f-col items-center">
        <img
          src={conditionImg}
          alt="cloudy"
          className="w-32"
        />
      </div>

      <div className="f-row gap-4 justify-around *:place-items-center">

        <div className="f-col">
          <Wind size="30" />
          <span>{weather.windSpeed} km/h</span>
          <small className="font-light">Wind</small>
        </div>

        <div className="f-col">
          <Droplet size="30" />
          <span>{weather.humidity}%</span>
          <small className="font-light">Humidity</small>
        </div>

        <div className="f-col">
          <CircleGauge size="28" />
          <span className="tracking-tighter">{weather.pressure}</span>
          <small className="font-light">Pressure</small>
        </div>

      </div>
    </div>
  )
}

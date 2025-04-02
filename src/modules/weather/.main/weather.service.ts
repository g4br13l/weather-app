import { queryOptions } from '@tanstack/react-query'
import type { WeatherT } from '@/modules/weather/.main/weather.entity'
import { makeHttpReq } from '@/main/http/makeHttpReq'
import { Condition } from '@/main/type/conditions'



type ConditionT = Condition.ConditionT
const CONDITIONS = Condition.CONDITIONS

type GeoLocationPropsT = {
  city: string
  state?: string
  country?: string
  limit?: number
}

type WeatherInfoPropsT = {
  lat: string
  lon: string
}

export const weatherAPI = {
  base: '/weatherAPI', // 'http://api.openweathermap.org',
  geoLocation: ({ city, state, country, limit }: GeoLocationPropsT) => {
    const path = '/geo/1.0/direct'
    const query = `?q=${city}${state ? ',' + state : ''}${country ? ',' + country : ''}`
    const limitQr = limit ? `&limit=${limit}` : ''
    const appId = `&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_KEY}`
    return `${weatherAPI.base}${path}${query}${limitQr}${appId}`
  },
  info: ({ lat, lon }: WeatherInfoPropsT) => {
    const infoPathQr = `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
    const appId = `&appid=${import.meta.env.VITE_APP_OPEN_WEATHER_KEY}`
    return weatherAPI.base + infoPathQr + appId
  },
} as const

type GeoLocationResT = Array<{
  name: string
  local_names?: {
    en: string
    pt: string
  }
  lat: number
  lon: number
  country: string
  state?: string
}>

type WeatherInfoApiResT = {
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
}

type WeatherInfoResT = {
  weather: WeatherT
  condition: ConditionT
}

export const weatherService = {

  parseConditionRes: (condId: string) => {
    return condId === '800' // Group 800: Clear
      ? CONDITIONS.clear
      : condId.startsWith('8') // Group 80x: Clouds
        ? CONDITIONS.cloudy
        : condId.startsWith('7') // Group 7xx: Atmosphere
          ? CONDITIONS.cloudy
          : condId.startsWith('6') // Group 6xx: Snow
            ? CONDITIONS.snowy
            : condId.startsWith('5') // Group 5xx: Rain
              ? CONDITIONS.rainy
              : condId.startsWith('3') // Group 3xx: Drizzle
                ? CONDITIONS.cloudy
                : condId.startsWith('2') // Group 2xx: Thunderstorm
                  ? CONDITIONS.rainy
                  : CONDITIONS.clear
  },

  getCoordinates: (city: string, country?: string) => {
    return queryOptions({
      queryKey: ['COORDINATES', { city, country }],
      queryFn: () => {
        const url = weatherAPI.geoLocation({ city: city, country: country })
        return makeHttpReq().get<GeoLocationResT>(url)
      },
    })
  },

  getWeatherInfo: (lat: string, lon: string) => {

    return queryOptions({
      queryKey: ['WEATHER', { lat, lon }],
      queryFn: async () => {
        const url = weatherAPI.info({ lat, lon })
        const res = await makeHttpReq().get<WeatherInfoApiResT>(url)
        return {
          weather: {
            temperature: Number(res.main.temp.toFixed()),
            humidity: res.main.humidity,
            pressure: String(res.main.pressure),
            windSpeed: Number(res.wind.speed.toFixed()),
          },
          condition: weatherService.parseConditionRes(res.weather[0].id.toString())
        } as WeatherInfoResT
      },
    })
  },
}

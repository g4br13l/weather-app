

export type LocationT = {
  country: string
  state?: string
  city: string
}



export namespace Location {

  type CitiesT = Array<{
    id: number,
    label: string,
    state: string,
    country: string,
    lat: string,
    lon: string
  }>


  export const CITIES = [
    {
      id: 1,
      label: 'Joinville',
      state: 'SC',
      country: 'BR',
      lat: '-26.3044898',
      lon: '-48.8486726',
    },
    {
      id: 2,
      label: 'San Francisco',
      state: 'CA',
      country: 'US',
      lat: '37.7790262',
      lon: '-122.419906'
    },
    {
      id: 3,
      label: 'Urubici',
      state: 'SC',
      country: 'BR',
      lat: '-28.015663',
      lon: '-49.592547'
    }
  ] as const satisfies CitiesT


  export type CityT = (typeof CITIES)[number]

  export function getCityById(cityId: number) {
    return CITIES.find(city => city.id === cityId)
  }

}



export namespace Condition {


  export const CONDITIONS = {
    clear:  { id: 1, label: 'clear' },
    cloudy: { id: 2, label: 'cloudy' },
    rainy:  { id: 3, label: 'rainy' },
    snowy:  { id: 4, label: 'snowy' },
  } as const

  export type ConditionsT = typeof CONDITIONS
  export type ConditionT = (ConditionsT)[keyof typeof CONDITIONS]

}

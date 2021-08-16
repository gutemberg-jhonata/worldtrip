import { SimpleGrid } from "@chakra-ui/react"

import { City } from "./City"

type Country = {
  name: string,
  flag: string
}

type CityData = {
  name: string,
  image: string,
  country: Country
}

type CitiesProps = {
  values: CityData[]
}

export function Cities({ values }: CitiesProps) {
  return (
    <SimpleGrid columns={4} spacingY={12} mb={12}>
      {values && values.map(city => <City key={city.name} {...city} />)}
    </SimpleGrid>
  )
}
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
    <SimpleGrid minChildWidth="256px" justifyContent="center" spacingX={8} spacingY={10} mb={12}>
      {values && values.map(city => <City key={city.name} {...city} />)}
    </SimpleGrid>
  )
}
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react"

import { City } from "./City"

type Country = {
  name: string,
  code: string
}

type CityData = {
  name: string,
  image: string,
  country: Country
}

type CitiesProps = {
  values: CityData[]
} & SimpleGridProps

export function Cities({ values, ...rest }: CitiesProps) {
  return (
    <SimpleGrid
      minChildWidth="256px"
      justifyContent="center"
      spacingX={8}
      spacingY={[5, 8, 10]}
      {...rest}
    >
      {values && values.map(city => <City key={city.name} {...city} />)}
    </SimpleGrid>
  )
}
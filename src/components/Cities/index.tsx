import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { City } from "./City"

type Country = {
  name: string,
  flag: string
}

type CityData = {
  name: string,
  country: Country
}

type CitiesProps = {
  values: CityData[]
}

export function Cities({ values }: CitiesProps) {
  return (
    <City></City>
  )
}
import { HStack } from "@chakra-ui/react"

import { ContinentItem } from "./ContinentItem"

type ContinentInfoProps = {
  countries: number,
  languages: number,
  cities: number
}

export function ContinentInfo({ countries, languages, cities }: ContinentInfoProps) {
  return (
    <HStack spacing="10" textAlign="center">
      <ContinentItem value={countries}>países</ContinentItem>
      <ContinentItem value={languages}>línguas</ContinentItem>
      <ContinentItem
        value={cities}
        label="As 100 cidades mais visitadas do mundo"
      >
        cidades +100
      </ContinentItem>
    </HStack>
  )
}
import { Flex, StackProps } from "@chakra-ui/react"

import cocktailImg from "@images/cocktail.svg"
import surfImg from "@images/surf.svg"
import buildingImg from "@images/building.svg"
import museumImg from "@images/museum.svg"
import earthImg from "@images/earth.svg"

import { TravelItem } from "./TravelItem"

export function TravelTypes({ ...rest }: StackProps) {
  return (
    <Flex align="center" justify="space-between" {...rest}>
      <TravelItem icon={cocktailImg}>vida noturna</TravelItem>
      <TravelItem icon={surfImg}>praia</TravelItem>
      <TravelItem icon={buildingImg}>moderna</TravelItem>
      <TravelItem icon={museumImg}>clássico</TravelItem>
      <TravelItem icon={earthImg}>e mais...</TravelItem>
    </Flex>
  )
}
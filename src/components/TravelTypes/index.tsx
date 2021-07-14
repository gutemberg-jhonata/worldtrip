import { Flex, StackProps } from "@chakra-ui/react"

import { TravelItem } from "./TravelItem"

export function TravelTypes({ ...rest }: StackProps) {
  return (
    <Flex align="center" justify="space-between" {...rest}>
      <TravelItem icon="/images/cocktail.svg">vida noturna</TravelItem>
      <TravelItem icon="/images/surf.svg">praia</TravelItem>
      <TravelItem icon="/images/building.svg">moderna</TravelItem>
      <TravelItem icon="/images/museum.svg">clássico</TravelItem>
      <TravelItem icon="/images/earth.svg">e mais...</TravelItem>
    </Flex>
  )
}
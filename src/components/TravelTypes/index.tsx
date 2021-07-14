import { HStack, StackProps } from "@chakra-ui/react"

import { TravelItem } from "./TravelItem"

export function TravelTypes({ ...rest }: StackProps) {
  return (
    <HStack align="center" justify="center" spacing={130} {...rest}>
      <TravelItem icon="/images/cocktail.svg">vida noturna</TravelItem>
      <TravelItem icon="/images/surf.svg">praia</TravelItem>
      <TravelItem icon="/images/building.svg">moderna</TravelItem>
      <TravelItem icon="/images/museum.svg">clássico</TravelItem>
      <TravelItem icon="/images/earth.svg">e mais...</TravelItem>
    </HStack>
  )
}
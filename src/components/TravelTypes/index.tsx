import { Flex, GridItem, SimpleGrid, StackProps, useBreakpointValue } from "@chakra-ui/react"

import cocktailImg from "@images/cocktail.svg"
import surfImg from "@images/surf.svg"
import buildingImg from "@images/building.svg"
import museumImg from "@images/museum.svg"
import earthImg from "@images/earth.svg"

import { Wrapper } from "@components/Wrapper"
import { TravelItem } from "./TravelItem"

export function TravelTypes({ ...rest }: StackProps) {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  if (isWideVersion) {
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

  return (
    <Wrapper maxW="300px">
      <SimpleGrid columns={2} mt={9}>
        <GridItem>
          <TravelItem>vida noturna</TravelItem>
          <TravelItem mt={6}>moderna</TravelItem>
        </GridItem>
        <GridItem>
          <TravelItem justify="flex-end">praia</TravelItem>
          <TravelItem justify="flex-end" mt={6}>clássico</TravelItem>
        </GridItem>
      </SimpleGrid>
      <TravelItem justify="center" mt={6}>e mais...</TravelItem>
    </Wrapper>
  )
}
import { Box, Heading, Text, HStack } from "@chakra-ui/react"
import { ContinentItem } from "./ContinentItem"

export function ContinentInfo() {
  return (
    <HStack spacing="10" textAlign="center">
      <ContinentItem value="50" name="países" />
      <ContinentItem value="60" name="línguas" />
      <ContinentItem value="27" name="cidades +100" />
    </HStack>
  )
}
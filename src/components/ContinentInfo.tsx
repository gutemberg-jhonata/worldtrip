import { Box, Heading, Text, HStack } from "@chakra-ui/react"

export function ContinentInfo() {
  return (
    <HStack spacing="10" textAlign="center" fontWeight="semibold">
      <Box>
        <Heading fontSize="5xl" color="yellow.500">50</Heading>
        <Text fontSize="2xl">países</Text>
      </Box>
      <Box>
        <Heading fontSize="5xl" color="yellow.500">60</Heading>
        <Text fontSize="2xl">línguas</Text>
      </Box>
      <Box>
        <Heading fontSize="5xl" color="yellow.500">27</Heading>
        <Text fontSize="2xl">cidades +100</Text>
      </Box>
    </HStack>
  )
}
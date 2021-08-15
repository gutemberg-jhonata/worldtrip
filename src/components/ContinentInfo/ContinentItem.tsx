import { Box, Heading, Text } from "@chakra-ui/react"

type ContinentItemProps = {
  value: string,
  name: string
}

export function ContinentItem({ value, name }: ContinentItemProps) {
  return (
    <Box>
      <Heading
        fontWeight="semibold"
        fontSize="5xl"
        color="yellow.500"
      >
        {value}
      </Heading>

      <Text
        fontWeight="semibold"
        fontSize="2xl"
        color="gray.600"
      >
        {name}
      </Text>
    </Box>
  )
}
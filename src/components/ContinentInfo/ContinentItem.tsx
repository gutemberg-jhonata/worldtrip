import { Box, Heading, Text } from "@chakra-ui/react"

type ContinentItemProps = {
  value: number,
  children: string
}

export function ContinentItem({ value, children }: ContinentItemProps) {
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
        {children}
      </Text>
    </Box>
  )
}
import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"

type ContinentItemProps = {
  value: number,
  label?: string,
  children: string
}

export function ContinentItem({ value, label, children }: ContinentItemProps) {
  return (
    <Box>
      <Heading
        fontWeight="semibold"
        fontSize={["2xl", "4xl", "5xl"]}
        color="yellow.500"
      >
        {value}
      </Heading>

      <Flex alignItems="center">
        <Text
          fontWeight="semibold"
          fontSize={["lg", "xl", "2xl"]}
          color="gray.600"
        >
          {children}
        </Text>

        {label && (
          <Tooltip hasArrow label={label} bg="gray.300" color="gray.700">
            <InfoOutlineIcon ml={2} color="gray.400" />
          </Tooltip>
        )}
      </Flex>
    </Box>
  )
}
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"

import { Image } from "@components/ChakraNextImage"

type TravelItemProps = {
  icon?: string,
  children: string
} & FlexProps

export function TravelItem({ icon, children, ...rest }: TravelItemProps) {
  if (icon) {
    return (
      <Flex flexDir="column" align="center" justify="center">
        <Image src={icon} />
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          {children}
        </Text>
      </Flex>
    )
  }

  return (
    <Flex align="center" {...rest}>
      <Box w="8px" h="8px" borderRadius="full" bgColor="yellow.500" mr={2} />
      <Text fontSize="lg" fontWeight="normal" color="gray.600">
        {children}
      </Text>
    </Flex>
  )
}
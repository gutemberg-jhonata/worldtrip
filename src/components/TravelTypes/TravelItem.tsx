import { Flex, Text } from "@chakra-ui/react"

import { Image } from "@components/ChakraNextImage"

type TravelItemProps = {
  icon: string,
  children: string
}

export function TravelItem({ icon, children }: TravelItemProps) {
  return (
    <Flex flexDir="column" align="center" justify="center">
      <Image src={icon} />
      <Text fontWeight="semibold" color="gray.600">
        {children}
      </Text>
    </Flex>
  )
}
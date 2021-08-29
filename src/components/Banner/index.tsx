import { HStack, Box, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <HStack
      bgImage="/images/background.png"
      justify="space-between"
      align="center"
      px={140}
      h="335px"
    >
      <Box w="100%">
        <Heading
          color="gray.100"
          fontWeight="medium"
          fontSize="36"
        >
          6 Continentes,
          <Text>infinitas possibilidades.</Text>
        </Heading>
        <Text
          color="gray.200"
          fontSize="20"
          mt="4"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box
        w="100%"
        height="100%"
        position="relative"
      >
        <Image
          position="absolute"
          right="0"
          bottom="-10"
          src="/images/airplane.svg"
          alt="Airplane"
        />
      </Box>
    </HStack>
  )
}
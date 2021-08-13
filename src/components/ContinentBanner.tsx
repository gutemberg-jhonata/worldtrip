import { Flex, Image as ChakraImage, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h="500px"
      justifyContent="center"
      position="relative"
    >
      <Flex
        w="100%"
        h="100%"
        maxW="1440px"
        px="4"
        align="flex-end"
        position="absolute"
        zIndex="1"
      >
        <Heading
          mb={14}
          color="gray.100"
          fontWeight="semibold"
          fontSize="5xl"
        >
          Europa
        </Heading>
      </Flex>

      <ChakraImage
        w="100%"
        objectFit="cover"
        filter="brightness(0.7)"
        src={`https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`}
      />
    </Flex>
  )
}
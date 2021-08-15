import { Flex, Image as ChakraImage, Heading } from "@chakra-ui/react";

import { Wrapper } from "../Wrapper";

type ContinentBannerProps = {
  image: string,
  children: string
}

export function ContinentBanner({ image, children }: ContinentBannerProps) {
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
        align="flex-end"
        position="absolute"
        zIndex="1"
      >
        <Wrapper>
          <Heading
            mb={14}
            color="gray.100"
            fontWeight="semibold"
            fontSize="5xl"
          >
            {children}
          </Heading>
        </Wrapper>
      </Flex>

      <ChakraImage
        w="100%"
        objectFit="cover"
        filter="brightness(0.7)"
        src={image}
      />
    </Flex>
  )
}
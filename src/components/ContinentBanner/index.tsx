import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react"

import { Wrapper } from "@components/Wrapper"
import { Image } from "@components/ChakraNextImage"

type ContinentBannerProps = {
  image: string,
  children: string
}

export function ContinentBanner({ image, children }: ContinentBannerProps) {
  const isSmallVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      w="100%"
      h={[36, 52, 80, "500px"]}
      justifyContent="center"
      position="relative"
    >
      <Wrapper>
        <Flex
          w="100%"
          h="100%"
          align={isSmallVersion ? "center" : "flex-end"}
          justify={isSmallVersion ? "center" : "flex-start"}
        >
          <Heading
            mb={isSmallVersion ? 0 : 14}
            color="gray.100"
            fontWeight="semibold"
            fontSize={["3xl", "4xl", "5xl"]}
            zIndex="1"
          >
            {children}
          </Heading>
        </Flex>
      </Wrapper>

      <Image
        layout="fill"
        objectFit="cover"
        filter="brightness(0.7)"
        src={image}
      />
    </Flex>
  )
}
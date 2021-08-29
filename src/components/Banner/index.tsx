import { Box, useBreakpointValue, Flex } from "@chakra-ui/react"

import { Wrapper } from "@components/Wrapper"
import { Image } from "@components/ChakraNextImage"
import { Title } from "./Title"
import { Subtitle } from "./Subtitle"

import bgImg from "@images/background.png"
import airplaneImg from "@images/airplane.svg"

export function Banner() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <Box w="100%" py={[7, 10, 20]} position="relative">
      <Image src={bgImg} layout="fill" objectFit="cover" placeholder="blur" />

      <Wrapper position="relative" h="100%">
        <Flex justify="space-between" h="100%" position="relative">
          <Flex
            w={isWideVersion ? "50%" : "100%"}
            justify="center"
            flexDir="column"
          >
            <Title />
            <Subtitle />
          </Flex>

          {isWideVersion && (
            <Box position="absolute" right={0}>
              <Image src={airplaneImg} alt="Airplane" />
            </Box>
          )}
        </Flex>
      </Wrapper>
    </Box>
  )
}
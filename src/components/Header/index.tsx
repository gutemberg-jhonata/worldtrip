import Link from "next/link"
import { useRouter } from "next/dist/client/router"

import { useEffect, useState } from "react"

import { Box, Link as ChakraLink } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

import { Wrapper } from "@components/Wrapper"
import { Image } from "@components/ChakraNextImage"

import logoImg from "@images/logo.svg"

export function Header() {
  const [isContinentsPage, setIsContinentsPage] = useState(false)

  const router = useRouter()
  const path = router.asPath

  useEffect(() => {
    setIsContinentsPage(path.includes('continents'))
  }, [path])

  return (
    <Box bgColor="white" py="6">
      <Wrapper
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {isContinentsPage && (
          <Box position="absolute" left="0">
            <Link href="/">
              <ChakraLink>
                <ChevronLeftIcon w="32px" h="32px" color="gray.600" />
              </ChakraLink>
            </Link>
          </Box>
        )}

        <Image src={logoImg} alt="worldtrip" />
      </Wrapper>
    </Box>
  )
}
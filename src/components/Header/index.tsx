import Link from "next/link"

import { Box, Image, Link as ChakraLink } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

import { Wrapper } from "../Wrapper"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

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

        <Image src="/images/logo.svg" alt="worldtrip" />
      </Wrapper>
    </Box>
  )
}
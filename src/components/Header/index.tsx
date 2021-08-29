import { useRouter } from "next/dist/client/router"

import { useEffect, useState } from "react"

import { Box } from "@chakra-ui/react"

import { Wrapper } from "@components/Wrapper"
import { Image } from "@components/ChakraNextImage"

import logoImg from "@images/logo.svg"
import { BackNavigation } from "./BackNavigation"

export function Header() {
  const [isContinentsPage, setIsContinentsPage] = useState(false)

  const router = useRouter()
  const path = router.asPath

  useEffect(() => {
    setIsContinentsPage(path.includes('continents'))
  }, [path])

  return (
    <Box bgColor="white" py={[4, 5, 6]}>
      <Wrapper
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {isContinentsPage && (
          <BackNavigation />
        )}

        <Box width={[20, 32, 44]} height={[5, 8, 10]}>
          <Image src={logoImg} alt="worldtrip" />
        </Box>
      </Wrapper>
    </Box>
  )
}
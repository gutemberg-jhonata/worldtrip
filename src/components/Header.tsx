import Link from "next/link"

import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react"

export function Header() {
  return (
    <Flex align="center" justify="center" pt="6" pb="6" bg="">
      <Link href="/">
        <ChakraLink>
          <Image src="/images/logo.svg" alt="worldtrip" />
        </ChakraLink>
      </Link>
    </Flex>
  )
}
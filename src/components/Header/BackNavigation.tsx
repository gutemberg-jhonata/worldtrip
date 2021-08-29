import Link from "next/link"

import { Box, Link as ChakraLink } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

export function BackNavigation() {
  return (
    <Box position="absolute" left="0">
      <Link href="/">
        <ChakraLink>
          <ChevronLeftIcon
            w={[4, 6, 8]}
            h={[4, 6, 8]}
            color="gray.600"
          />
        </ChakraLink>
      </Link>
    </Box>
  )
}
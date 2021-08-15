import { Box } from "@chakra-ui/react"

import { ReactNode } from "react"

type WrapperProps = {
  children: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <Box m="0 auto" px="2" w="100%" maxW="1160px">
      {children}
    </Box>
  )
}
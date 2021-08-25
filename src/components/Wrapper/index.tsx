import { ReactNode } from "react"

import { Box, BoxProps } from "@chakra-ui/react"

type WrapperProps = {
  children: ReactNode
} & BoxProps

export function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Box m="0 auto" px="2" w="100%" maxW="1160px" {...rest}>
      {children}
    </Box>
  )
}
import { Box } from "@chakra-ui/react"

import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <Box px={140}>
      {children}
    </Box>
  )
}
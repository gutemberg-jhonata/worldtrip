import NextImage from "next/image"

import { chakra } from "@chakra-ui/react"

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})
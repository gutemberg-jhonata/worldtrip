import NextImage from "next/image"

import { chakra } from "@chakra-ui/react"

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => [
    'width',
    'height',
    'layout',
    'src',
    'alt'
  ].includes(prop)
})
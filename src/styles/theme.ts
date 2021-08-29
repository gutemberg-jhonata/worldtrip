import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    barlow: "Barlow, sans-serif "
  },
  fontWeights: {
    normal: 500
  },
  colors: {
    gray: {
      100: "#F5F8FA",
      200: "#DADADA",
      400: "#999999",
      600: "#47585B"
    },
    yellow: {
      500: "#FFBA08"
    }
  },
  styles: {
    global: {
      body: {
        bg: "gray.100"
      }
    }
  }
})
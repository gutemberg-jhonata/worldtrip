import { AppProps } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"

import NProgress from "nprogress"
import { Router } from "next/dist/client/router"

import { theme } from "../styles/theme"
import "nprogress/nprogress.css"
import "../styles/nprogress.scss"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../styles/swiper.scss"

NProgress.configure({
  showSpinner: false
})

Router.events.on("routeChangeStart", () => {
  NProgress.start();
})

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
})

Router.events.on("routeChangeError", () => {
  NProgress.done();
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

import Head from "next/head"

import { Heading, Text } from "@chakra-ui/react"

import { Banner } from "../components/Banner"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { TravelTypes } from "../components/TravelTypes"
import { Divider } from "../components/Divider"
import { ContinentsSlide } from "../components/ContinentsSlide"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />
      <Banner />

      <Container>
        <TravelTypes mt={90} />
      </Container>

      <Divider />

      <Heading
        mb="14"
        textAlign="center"
        fontWeight="medium"
        fontSize="4xl"
        color="gray.600"
      >
        Vamos nessa?
        <Text>Então escolha seu continente</Text>
      </Heading>

      <ContinentsSlide />
    </>
  )
}

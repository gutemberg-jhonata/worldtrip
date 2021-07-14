import Head from "next/head"
import { Banner } from "../components/Banner"
import { Container } from "../components/Container"

import { Header } from "../components/Header"
import { TravelTypes } from "../components/TravelTypes"

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
    </>
  )
}

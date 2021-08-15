import Head from "next/head"

import { Heading, Text } from "@chakra-ui/react"

import { api } from "../services/api"

import { Banner } from "../components/Banner"
import { Wrapper } from "../components/Wrapper"
import { Header } from "../components/Header"
import { TravelTypes } from "../components/TravelTypes"
import { Divider } from "../components/Divider"
import { ContinentsSlide } from "../components/ContinentsSlide"
import { GetStaticProps } from "next"

type Continent = {
  name: string,
  slug: string,
  description: string,
  firstImage: string
}

type HomeProps = {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />
      <Banner />

      <Wrapper>
        <TravelTypes mt={90} />
      </Wrapper>

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

      <ContinentsSlide continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api.get("/continents");

  return {
    props: {
      continents: continents.data
    },
    revalidate: 24 * 60 * 60 // 24 horas
  }
}
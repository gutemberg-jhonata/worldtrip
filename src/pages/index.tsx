import Head from "next/head"
import { GetStaticProps } from "next"

import { Heading, Text } from "@chakra-ui/react"

import { api } from "@services/api"

import { Banner } from "@components/Banner"
import { Wrapper } from "@components/Wrapper"
import { Header } from "@components/Header"
import { TravelTypes } from "@components/TravelTypes"
import { Divider } from "@components/Divider"
import { ContinentsSlide } from "@components/ContinentsSlide"

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
        <title>Início | worldtrip</title>
      </Head>

      <Header />
      <Banner />

      <Wrapper>
        <TravelTypes mt={90} />

        <Divider />

        <Heading
          mb={[5, 10, 14]}
          textAlign="center"
          fontWeight="medium"
          fontSize={["xl", "2xl", "4xl"]}
          color="gray.600"
        >
          Vamos nessa?
          <Text>Então escolha seu continente</Text>
        </Heading>

      </Wrapper>

      <Wrapper px={0} mb={[6, 8, 10]}>
        <ContinentsSlide continents={continents} />
      </Wrapper>
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
import Head from "next/head"

import { Heading, HStack, Text } from "@chakra-ui/react"

import { ContinentBanner } from "../../components/ContinentBanner"
import { Header } from "../../components/Header"
import { Wrapper } from "../../components/Wrapper"
import { ContinentInfo } from "../../components/ContinentInfo"
import { Cities } from "../../components/Cities"
import { GetStaticPaths, GetStaticProps } from "next"

import { api } from "../../services/api"

type Info = {
  countries: number,
  languages: number,
  cities: number
}

type Country = {
  name: string,
  flag: string
}

type City = {
  name: string,
  country: Country
}

type ContinentProps = {
  name: string,
  secondImage: string,
  bio: string,
  info: Info,
  moreVisitedCities: City[]
}

export default function Continent({ name, secondImage, bio, info, moreVisitedCities }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{name} | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner image={secondImage}>{name}</ContinentBanner>

      <Wrapper>
        <HStack spacing="16" mt="20" justify="space-between">
          <Text fontSize="2xl" w="50%" textAlign="justify">
            {bio}
          </Text>

          <ContinentInfo {...info} />
        </HStack>

        <Heading
          fontSize="4xl"
          mt="20"
          mb="10"
          color="gray.600"
          fontWeight="medium"
        >
          Cidades +100
        </Heading>

        <Cities values={moreVisitedCities} />
      </Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const response = await api.get(`/continents?slug=${slug}`)
  const continent = response.data[0]

  if (!continent) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: continent
  }
}
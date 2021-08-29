import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"

import { Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

import { api } from "@services/api"

import { ContinentBanner } from "@components/ContinentBanner"
import { Header } from "@components/Header"
import { Wrapper } from "@components/Wrapper"
import { ContinentInfo } from "@components/ContinentInfo"
import { Cities } from "@components/Cities"

type Info = {
  countries: number,
  languages: number,
  cities: number
}

type Country = {
  name: string,
  code: string
}

type City = {
  name: string,
  image: string,
  country: Country
}

type ContinentProps = {
  name: string,
  secondImage: string,
  bio: string,
  info: Info,
  moreVisitedCities: City[]
}

export default function Continents(
  {
    name,
    secondImage,
    bio,
    info,
    moreVisitedCities
  }: ContinentProps) {

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Head>
        <title>{name} | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner image={secondImage}>{name}</ContinentBanner>

      <Wrapper>
        <Stack
          direction={isWideVersion ? "row" : "column"}
          spacing={4}
          mt={[6, 10, 12, 20]}
          justify="space-between"
        >
          <Text
            fontSize={["sm", "lg", "2xl"]}
            w={isWideVersion ? "50%" : "100%"}
            textAlign="justify"
          >
            {bio}
          </Text>

          <ContinentInfo mt={4} {...info} />
        </Stack>

        <Heading
          fontSize={["2xl", "3xl", "4xl"]}
          mt={[8, 12, 20]}
          mb={[5, 8, 10]}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(`/continents?_limit=3`);

  const paths = response.data.map(continent => {
    return {
      params: {
        slug: continent.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const response = await api.get(`/continents?slug=${slug}`)
  const [continent] = response.data

  if (!continent) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: continent,
    revalidate: 24 * 60 * 60 // 24 horas
  }
}
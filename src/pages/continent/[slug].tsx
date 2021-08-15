import Head from "next/head"

import { Heading, HStack, Text } from "@chakra-ui/react"

import { ContinentBanner } from "../../components/ContinentBanner"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import { ContinentInfo } from "../../components/ContinentInfo"
import { Cities } from "../../components/Cities"

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continent | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner />

      <Container>
        <HStack spacing="16" mt="20" justify="space-between">
          <Text fontSize="2xl" w="50%" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
          <ContinentInfo />
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

        <Cities />
      </Container>
    </>
  )
}
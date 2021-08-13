import Head from "next/head";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continent | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner />
    </>
  )
}
import Head from "next/head"
import { Banner } from "../components/Banner"

import { Header } from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />
      <Banner />
    </>
  )
}

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation])

import { Flex, Heading, Text, Image } from "@chakra-ui/react"
import Link from "next/link";

type Continent = {
  name: string,
  slug: string,
  description: string,
  firstImage: string
}

type ContinentsSlideProps = {
  continents: Continent[]
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper"
    >
      {continents.map(continent => {
        return (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              zIndex="1"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <Heading
                  color="gray.100"
                  fontSize="5xl"
                  transition="color 0.2s"
                  _hover={{ color: "yellow.500", cursor: "pointer" }}
                >
                  {continent.name}
                </Heading>
              </Link>
              <Text color="gray.200" fontSize="2xl">{continent.description}</Text>
            </Flex>
            <Image src={continent.firstImage} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
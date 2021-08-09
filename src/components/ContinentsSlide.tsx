import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation])

import { Flex, Heading, Text, Image } from "@chakra-ui/react"

type Continent = {
  name: string,
  description: string,
  image: string
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
          <SwiperSlide key={continent.name}>
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              zIndex="1"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Heading color="gray.100" fontSize="5xl">{continent.name}</Heading>
              <Text color="gray.200" fontSize="2xl">{continent.description}</Text>
            </Flex>
            <Image src={continent.image} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation])

import { Flex, Heading, Text, Image } from "@chakra-ui/react"

export function ContinentsSlide() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          pos="absolute"
          zIndex="1"
          flexDir="column"
          justify="center"
          align="center"
        >
          <Heading color="gray.100" fontSize="5xl">Europa</Heading>
          <Text color="gray.200" fontSize="2xl">O continente mais antigo.</Text>
        </Flex>
        <Image src={`https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`} />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
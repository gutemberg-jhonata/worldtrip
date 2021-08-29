import Link from "next/link";
import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation])

import { Image } from "@components/ChakraNextImage"

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
              <Link href={`/continents/${continent.slug}`}>
                <ChakraLink
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                >
                  <Heading
                    color="gray.100"
                    fontSize={["2xl", "3xl", "5xl"]}
                    transition="color 0.2s"
                    textDecor="none"
                    _hover={{ color: "yellow.500", cursor: "pointer" }}
                  >
                    {continent.name}

                    <Text
                      color="gray.200"
                      fontSize={["sm", "xl", "2xl"]}
                      mt={4}
                    >
                      {continent.description}
                    </Text>
                  </Heading>
                </ChakraLink>
              </Link>
            </Flex>

            {continent.firstImage && (
              <Image
                bgColor="gray.200"
                layout="fill"
                src={continent.firstImage}
              />
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
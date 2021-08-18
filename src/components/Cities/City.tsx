import { Box, Flex, Text, Image } from "@chakra-ui/react"

type Country = {
  name: string,
  flag: string
}

type CityProps = {
  name: string,
  image: string,
  country: Country
}

export function City({ name, image, country }: CityProps) {
  return (
    <Box
      bgColor="white"
    >
      <Image
        overflow="hidden"
        borderTopRadius="md"
        src={image}
        alt="london"
      />

      <Flex
        border="1px"
        borderTop="0px"
        borderColor="rgba(255, 186, 8, 0.5)"
        borderBottomRadius="md"
        justify="space-between"
        align="center"
        px="6"
        py="4"
      >
        <Box fontFamily="barlow">
          <Text
            fontWeight="semibold"
            fontSize="xl"
            color="gray.600"
          >
            {name}
          </Text>
          <Text
            fontSize="md"
            color="gray.400"
          >
            {country.name}
          </Text>
        </Box>

        <Image
          w="30px"
          h="30px"
          borderRadius="full"
          objectFit="cover"
          src={country.flag}
          alt="london"
        />
      </Flex>
    </Box>
  )
}
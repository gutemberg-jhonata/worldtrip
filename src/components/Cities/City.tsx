import { Box, Flex, Text, Image } from "@chakra-ui/react"

export function City() {
  return (
    <Box
      w="256px"
      bgColor="white"
      mb="12"
    >
      <Image
        overflow="hidden"
        borderTopRadius="md"
        src={`https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`}
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
            Londres
          </Text>
          <Text
            fontSize="md"
            color="gray.400"
          >
            Reino Unido
          </Text>
        </Box>

        <Image
          w="30px"
          h="30px"
          borderRadius="full"
          objectFit="cover"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
          alt="london"
        />
      </Flex>
    </Box>
  )
}
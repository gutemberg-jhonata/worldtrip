import { Heading, Text } from "@chakra-ui/react";

export function Title() {
  return (
    <Heading
      color="gray.100"
      fontWeight={["normal", "medium"]}
      fontSize={["xl", "2xl", "4xl"]}
    >
      6 Continentes,
      <Text>infinitas possibilidades.</Text>
    </Heading>
  )
}
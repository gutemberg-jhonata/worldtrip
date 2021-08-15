import { Center, Divider as ChakraDivider } from "@chakra-ui/react"

export function Divider() {
  return (
    <Center>
      <ChakraDivider
        borderBottomWidth="2px"
        borderColor="gray.600"
        w="90px"
        mt="20"
        mb="14"
      />
    </Center>
  )
}
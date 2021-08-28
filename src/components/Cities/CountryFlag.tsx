import { Box } from "@chakra-ui/react"

import ReactCountryFlag from "react-country-flag"

type CountryFlagProps = {
  countryCode: string
}

export function CountryFlag({ countryCode }: CountryFlagProps) {
  return (
    <Box
      w={8}
      h={8}
      overflow="hidden"
      borderRadius="full"
    >
      <ReactCountryFlag
        title={countryCode}
        countryCode={countryCode}
        svg
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </Box>
  )
}
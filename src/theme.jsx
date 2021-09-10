import {extendTheme} from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "lg",
        },
      },
    },
  },
});

export default theme;

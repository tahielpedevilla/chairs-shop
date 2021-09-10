import React from "react";
import {useColorMode} from "@chakra-ui/react";
import {Button, IconButton} from "@chakra-ui/button";
import {Box, Flex, Heading, Link, Stack} from "@chakra-ui/layout";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

const NavBar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "Dark" : "Light"} w="100%">
      <Flex boxShadow="lg" justify="space-around" p={4}>
        <Heading>{"Walla's"}</Heading>
        <Stack direction="row" spacing={6}>
          <Button as={Link} href="/products" variant="link">
            Products
          </Button>
          <Button as={Link} href="/contact" variant="link">
            Contact
          </Button>
          <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
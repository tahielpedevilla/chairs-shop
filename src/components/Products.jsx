import React from "react";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout";

import Card from "./ui/Card";

const Products = () => {
  return (
    <>
      <Box h="100%" m={16} rounded={"lg"}>
        <Heading p={8}>Sillas</Heading>
        <Flex flexWrap="wrap" justify="center">
          <Stack direction="row" spacing={8}>
            <Card />
            <Card />
            <Card />
          </Stack>
          <Stack direction="row" spacing={8}>
            <Card />
            <Card />
            <Card />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Products;

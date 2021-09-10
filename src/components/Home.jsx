import React from "react";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout";
import {Text, Image} from "@chakra-ui/react";

const BACKGROUND =
  "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80";
const Home = () => {
  return (
    <>
      <Box h="100%" m={16} rounded={"lg"}>
        <Heading p={8} textAlign="center">
          Welcome to Walla´s
        </Heading>
        <Flex flexWrap="wrap" justify="center">
          <Stack direction="row" spacing={8}>
            <Text fontSize="xl" textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio harum, laboriosam ut libero quas
              hic perspiciatis at, placeat perferendis asperiores quasi odio repellat ipsum facere distinctio maxime.
            </Text>
          </Stack>
          <Image mt={16} src={BACKGROUND} w="70%" />
        </Flex>
      </Box>
    </>
  );
};

export default Home;

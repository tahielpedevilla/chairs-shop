import React from "react";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout";
import {Text, Image} from "@chakra-ui/react";

const BACKGROUND2 =
  "https://images.unsplash.com/photo-1489269637500-aa0e75768394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80";
const BACKGROUND =
  "https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80";
const Home = () => {
  return (
    <>
      <Box h="100%" m={16}>
        <Heading fontSize="7xl" p={8} textAlign="center" textShadow="dark-lg">
          Welcome to Walla´s
        </Heading>
        <Text fontSize="2xl" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus debitis? Nisi enim, natus molestiae
          voluptatem dolor quidem eos numquam.
        </Text>
        <Flex flexWrap="wrap" justify="center">
          <Stack direction="row" spacing={8} />
          <Stack direction="row" m={16} spacing={6}>
            <Image rounded={"xl"} src={BACKGROUND2} />
            <Stack direction="column" spacing={8}>
              <Image rounded={"xl"} src={BACKGROUND} />
              <Image rounded={"xl"} src={BACKGROUND} />
            </Stack>
          </Stack>
          <Text fontSize="xl" textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio harum, laboriosam ut libero quas hic
            perspiciatis at, placeat perferendis asperiores quasi odio repellat ipsum facere distinctio maxime. Lorem
            ipsum dolor sit amet.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Home;

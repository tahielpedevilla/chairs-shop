import React from "react";
import {Box, Center, useColorModeValue, Heading, Text, Stack, Image} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const IMAGE2 =
  "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const Card = () => {
  return (
    <Center py={12}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        maxW={"330px"}
        minW={"250px"}
        p={6}
        pos={"relative"}
        role={"group"}
        rounded={"lg"}
        w={"full"}
        zIndex={1}
      >
        <Box
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE2})`,
            filter: "blur(15px)",
            opacity: "20%",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
          height={"230px"}
          mt={-12}
          pos={"relative"}
          rounded={"lg"}
        >
          <Image height={230} objectFit={"cover"} rounded={"lg"} src={IMAGE2} width={282} />
        </Box>
        <Stack align={"center"} pt={10}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontFamily={"body"} fontSize={"2xl"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack align={"center"} direction={"row"}>
            <Text fontSize={"xl"} fontWeight={800}>
              $57
            </Text>
            <Text color="gray.600" textDecoration="line-through">
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;

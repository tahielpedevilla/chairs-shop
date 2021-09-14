import {Button} from "@chakra-ui/button";
import {FormLabel, FormControl} from "@chakra-ui/form-control";
import {Input} from "@chakra-ui/input";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout";
import {Textarea} from "@chakra-ui/textarea";
import React from "react";
import {useColorModeValue} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box alignItems="center" h="100vh">
        <Flex bg={useColorModeValue("gray.50", "gray.700")} direction="column" justify="center" p={16} w="100%">
          <Heading alignSelf="center">Contact.</Heading>
          <Stack
            bg={useColorModeValue("gray.50", "gray.600")}
            boxShadow="2xl"
            direction="row"
            m={40}
            opacity="80%"
            p={50}
            rounded="xl"
            spacing={16}
            w="container.md"
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />
              <FormLabel mt={4}>Email</FormLabel>
              <Input />
              <FormLabel mt={4}>Message</FormLabel>
              <Textarea />
              <Button colorScheme="teal" mt={4} type="submit">
                Send
              </Button>
            </FormControl>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;

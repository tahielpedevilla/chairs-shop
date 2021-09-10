import {FormLabel, FormControl} from "@chakra-ui/form-control";
import {Input} from "@chakra-ui/input";
import {Box, Flex, Heading, Stack} from "@chakra-ui/layout";
import {Textarea} from "@chakra-ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <>
      <Box alignItems="center" bgPos="center" bgRepeat="no-repeat" bgSize="cover" h="100vh">
        <Flex direction="column" justify="center" p={16} w="100%">
          <Heading alignSelf="center">Contact.</Heading>
          <Stack boxShadow="xl" direction="row" m={50} opacity="80%" p={50} rounded="xl">
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input />
              <FormLabel>Email</FormLabel>
              <Input />
              <FormLabel>Mensaje</FormLabel>
              <Textarea />
            </FormControl>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;

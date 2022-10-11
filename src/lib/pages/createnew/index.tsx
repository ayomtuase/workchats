import {
  Text,
  Flex,
  Icon,
  HStack,
  Container,
  Divider,
  Input,
  Button,
  VStack,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";

import GoogleIcon from "../../../assets/google.svg";

const CreateNew = () => {
  return (
    <>
      <Text as="h1" textStyle="logo" my="12">
        workchats
      </Text>
      <Text
        as="h1"
        fontSize="48px"
        lineHeight="46px"
        fontWeight="bold"
        marginBottom="10px"
        textAlign="center"
      >
        First, enter your email
      </Text>
      <Flex maxW="400px" mx="auto" align="center" direction="column">
        <Container centerContent mt="8">
          <chakra.form w="full">
            <Input
              placeholder="name@work-email.com"
              p="11px 12px 13px"
              height="44px"
              mb="5"
              borderRadius="base"
              _placeholder={{ color: "#666C7F" }}
            />
            <Button
              type="submit"
              bg="#4a154b"
              w="full"
              borderRadius="base"
              color="white"
              _hover={{ bg: "#4a154be6" }}
              _focus={{
                bg: "#4a154be6",
              }}
            >
              Continue
            </Button>
          </chakra.form>
          <HStack w="full" mt="7" mb="7" spacing="5">
            <Divider h="2px" color="black" />
            <Text>OR</Text>
            <Divider h="2px" color="black" />
          </HStack>
          <HStack
            as="button"
            spacing="3"
            border="2px solid #4285f4"
            w="full"
            justify="center"
            h="44px"
            borderRadius="base"
            color="#4285f4"
            _hover={{
              boxShadow: "0 1px 4px #0000004d",
            }}
          >
            <Icon as={GoogleIcon} />

            <Text as="span">Sign in with Google</Text>
          </HStack>
          <VStack mt="5" spacing="2" fontSize="14px">
            <Text>Already using Workchats</Text>
            <Link href="/">Sign in</Link>
          </VStack>
        </Container>
      </Flex>
    </>
  );
};

export default CreateNew;

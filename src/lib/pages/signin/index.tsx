import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Icon,
  HStack,
  Container,
  Divider,
  Input,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import GoogleIcon from "../../../assets/google.svg";

const SignIn = () => {
  return (
    <>
      <SimpleGrid as="header" py="12" columns={{ base: 1, md: 3 }}>
        <Box />
        <Text
          as="h1"
          textAlign="center"
          fontWeight="bold"
          fontSize="4xl"
          color="black"
        >
          workchats
        </Text>
        <VStack
          fontSize="13px"
          align={{ base: "center", md: "end" }}
          pe={{ base: "0", md: "10" }}
        >
          <Text color="rgba(97,96,97,1)">New to Workchats?</Text>
          <Link href="/createnew">Create an account</Link>
        </VStack>
      </SimpleGrid>
      <Text
        as="h1"
        fontSize="48px"
        marginBottom="10px"
        textAlign="center"
        lineHeight="46px"
        fontWeight="bold"
      >
        Sign in to Workchats
      </Text>
      <Flex maxW="400px" mx="auto" align="center" direction="column">
        <Container centerContent mt="8">
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
          <HStack w="full" mt="7" mb="7" spacing="5">
            <Divider h="2px" color="black" />
            <Text>OR</Text>
            <Divider h="2px" color="black" />
          </HStack>
          <form>
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
              Sign in with Email
            </Button>
          </form>
        </Container>
      </Flex>
    </>
  );
};

export default SignIn;

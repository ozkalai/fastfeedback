import Head from "next/head";
import { useAuth } from "@/lib/auth";
import styles from "@/styles/Home.module.css";
import { Button, Text, Icon, Flex } from "@chakra-ui/core";

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>Fast Feedback !</Head>
      <Icon name="logo" size="64px" color="black" />

      {auth.user ? (
        ""
      ) : (
        <Button onClick={(e) => auth.signinWithGoogle()}>
          Sign In with Google
        </Button>
      )}

      {auth?.user && (
        <Button mt={4} size="sm" onClick={(e) => auth.signout()}>
          Sign out
        </Button>
      )}
    </Flex>
  );
  console.log(auth);
}

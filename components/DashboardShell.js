import React, { useRef } from "react";
import {
  Flex,
  Link,
  Box,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button,
} from "@chakra-ui/core";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="whiteAlpha.500"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="center"
          alignItems="center"
          align="center"
        >
          <Icon name="logo" color="black" fontSize="24px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Box>
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoURL} />
        </Box>
      </Flex>
      <Flex
        flexDirection="row"
        backgroundColor="gray.100"
        justifyContent="center"
        height="100vh"
        p={8}
      >
        <Flex
          maxWidth="800px"
          w="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;

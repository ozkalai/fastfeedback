import React from "react";
import DashboardShell from "@/components/DashboardShell";
import { Flex, Heading, Text, Button } from "@chakra-ui/core";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      backgroundColor="white"
      width="100%"
      p={16}
      borderRadius="8px"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading mb={2} size="lg">
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome lets get started </Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;

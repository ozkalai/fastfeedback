import React from "react";
import DashboardShell from "@/components/DashboardShell";
import { Box, Heading, Text, Button } from "@chakra-ui/core";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white" width="100%" p={8} borderRadius={8}>
      <Heading size="md">Get feedback on your site instantly.</Heading>
      <Text>Start today and then grow with us </Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;

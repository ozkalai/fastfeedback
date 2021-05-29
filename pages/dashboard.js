import Head from "next/head";
import { useAuth } from "@/lib/auth";
import styles from "@/styles/Home.module.css";
import { Button, Text, Icon, Flex } from "@chakra-ui/core";
import EmptyState from "@/components/EmptyState";

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return "Loading...";
  }
  return <EmptyState />;
}

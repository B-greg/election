import { Button, Text } from "grommet";
import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import AppLayout from "../components/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Text>Main page</Text>
      <Link href="/question" passHref>
        <Button primary label="Go to questionnaire"/>
      </Link>
    </AppLayout>
  );
};

export default Home;

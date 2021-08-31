import { Button, Text } from "grommet";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import AppLayout from "../components/AppLayout";

const Question: NextPage = () => {


  
  return (
    <AppLayout>
      <Text>Question</Text>
      <Link href="/result/gulag" passHref>
        <Button primary label="Result"/>
      </Link>
    </AppLayout>
  );
};

export default Question;

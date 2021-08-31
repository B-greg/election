import { Text } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import AppLayout from "../../components/AppLayout";
import { results, Results } from "../../configs";

const Result: NextPage = () => {
  const result = results["default"];


  return (
    <AppLayout>
      <Text>Please answer the questions</Text>
    </AppLayout>
  );
};

export default Result;

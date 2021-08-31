import { Text } from "grommet";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import AppLayout from "../../components/AppLayout";
import { results, Results } from "../../configs";

const Result: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const pidResult = (pid as keyof Results);

  // Get the config from path parameter
  const result = useMemo(() => {
    return results[pidResult];
  }, [pidResult]);

  return (
    <AppLayout>
      <Text>{result.title}</Text>
    </AppLayout>
  );
};

export default Result;

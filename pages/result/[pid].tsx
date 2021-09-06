import { Text } from "grommet";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import AppLayout from "../../components/AppLayout";
import { results as resultsJson } from "../../configs";
import { ParsedUrlQuery } from "querystring";
import { Results, ResultType } from "../../types";

export interface ResultProps {
  result: ResultType;
}

export interface ResultParams extends ParsedUrlQuery {
  pid: string;
}

export const getStaticProps: GetStaticProps<ResultProps, ResultParams> = async (
  context
) => {
  const pid = context.params?.pid;
  const pidResult = pid as keyof Results;
  return {
    props: { result: resultsJson[pidResult] },
  };
};

export async function getStaticPaths() {
  const keys = Object.keys(resultsJson);
  const paths = keys.map((key) => {
    return {
      params: { pid: key },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const Result: NextPage<ResultProps> = (props) => {
  const { result } = props;
  const router = useRouter();

  return (
    <AppLayout>
      <Text>{result.title}</Text>
    </AppLayout>
  );
};

export default Result;

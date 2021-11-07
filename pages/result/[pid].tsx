import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Button,
} from "grommet";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import AppLayout from "../../components/AppLayout";
import { results as resultsJson } from "../../configs";
import { ParsedUrlQuery } from "querystring";
import { Results, ResultType } from "../../types";
import question from "../question";
import styles from "../../styles/Result.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { languageConfig } from "../../configs";
import Link from "next/link";

export interface ResultProps {
  result: ResultType;
}

export interface ResultParams extends ParsedUrlQuery {
  pid: string;
}

export const getStaticProps: GetStaticProps<ResultProps, ResultParams> = async (
  context
) => {
  const { locale = null, params = null } = context;
  const pid = params?.pid;
  const pidResult = pid as keyof Results;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? languageConfig.defaultLocale, [
        "common",
        "result",
      ])),
      result: resultsJson[pidResult],
    },
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
  const { t } = useTranslation("result");

  return (
    <AppLayout>
      <Box align="center" pad="small">
        <Box align="center" pad="medium">
          <Text>{t("title")}</Text>
        </Box>
        <Card
          height="large"
          width="large"
          background="light-1"
          className={styles.card}
        >
          <CardHeader pad="large" justify="center">
            <Heading level="3" className={styles.responseTitle}>
              {t(result.title)}
            </Heading>
          </CardHeader>
          <CardBody pad="medium" align="center">
            <Box height="100%" width="100%">
              <Image src={result.image} alt={result.image} fit="contain" />
              <Text className={styles.responseTextDescription}>
                {t(result.content)}
              </Text>
            </Box>
          </CardBody>
        </Card>
        <Box align="center" pad="small">
          <Text>{t("restart_description")}</Text>
        </Box>
        <Box align="center" pad="small">
          <Link href="/question" passHref>
            <Button size="large" primary label={t("restart")} />
          </Link>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Result;

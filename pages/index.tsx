import { Box, Button, Text } from "grommet";
import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"])),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("main");

  return (
    <AppLayout>
      <Box align="center" pad="medium">
      <Box align="center" pad="small">

        <Text>{t("main.content")}</Text>
        <Box align="center" pad="small">
        </Box>

        <Text>{t("main.inteliegence")}</Text>
        </Box>

        <Box align="center" pad="medium">
          <Link href="/question" passHref>
            <Button size="large" primary label={t("main.start")} />
          </Link>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Home;

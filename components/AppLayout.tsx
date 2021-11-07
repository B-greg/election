import React, { FC, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  Grommet,
  BoxExtendedProps,
  Collapsible,
  ResponsiveContext,
  Layer,
  Text,
  Footer,
  Main as GrommetMain,
  Grid,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";
import styles from "../styles/Home.module.css";
import theme from "../configs/theme";
import { useTranslation } from "react-i18next";

const AppBar = (props: BoxExtendedProps) => (
  <Box
    gridArea="header"
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

const AppLayout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("header.topBar")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grommet theme={theme} full>
        <Grid
          rows={["xxsmall", "full", "xsmall"]}
          columns={["full"]}
          areas={[["header"], ["main"], ["footer"]]}
        >
          <AppBar>
            <Heading level="3" margin="none">
              <Link href="/">{t("header.topBar")}</Link>
            </Heading>
          </AppBar>

          <GrommetMain
            background="white"
            elevation="none"
            pad="large"
            gap="large"
            direction="column"
            fill="horizontal"
            justify="center"
            gridArea="main"
            margin={{
              bottom: "16px",
              top: "16px",
              left: "auto",
              right: "auto",
            }}
            width={{ max: "xlarge" }}
            height={{ min: "90vh" }}
          >
            {children}
          </GrommetMain>

          <Footer
            background="light-4"
            justify="center"
            pad="small"
            gridArea="footer"
          >
            <Text textAlign="center" size="small">
              {t("footer.copyright")}
            </Text>
          </Footer>
        </Grid>
      </Grommet>
    </div>
  );
};

export default AppLayout;

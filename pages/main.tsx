import type { NextPage } from "next";
import React, { useState } from "react";
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
    style={{ zIndex: "1" }}
    {...props}
  />
);

const Main: NextPage = () => {
  return (
    <Grommet theme={theme} full>
      <Grid
        rows={["xxsmall", "full", "xsmall"]}
        columns={["full"]}
        areas={[["header"], ["main"], ["footer"]]}
      >
        <AppBar>
          <Heading level="3" margin="none">
            My App
          </Heading>
        </AppBar>

        <Box
          fill
          direction="row"
          justify="center"
          gridArea="main"
          background="light-1"
          pad="small"
        >
          <GrommetMain
            background="white"
            elevation="large"
            pad="large"
            gap="large"
            width={{ max: "xlarge" }}
            height={{ min: "xlarge" }}
          >
            <Text margin="small" size="xsmall">
              Main Content
            </Text>

            <Box flex />
          </GrommetMain>
        </Box>

        <Footer
          background="light-4"
          justify="center"
          pad="small"
          gridArea="footer"
        >
          <Text textAlign="center" size="small">
            © 2019 Copyright Grommet
          </Text>
        </Footer>
      </Grid>
    </Grommet>
  );
};

export default Main;

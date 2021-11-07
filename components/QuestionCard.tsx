import React, { FC, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Button,
  Image,
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
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "grommet";
import { FormClose, Notification, Slack } from "grommet-icons";
import styles from "./QuestionCard.module.css";
import theme from "../configs/theme";
import { QuestionType } from "../types";
import { useTranslation } from "next-i18next";

export interface QuestionCardProps {
  question: QuestionType;
  onPositiveClick: (url: string | number) => void;
  onNegativeClick: (url: string | number) => void;
}

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { question, onPositiveClick, onNegativeClick } = props;
  const { t } = useTranslation("question");

  return (
    <Card
      height="large"
      width="large"
      background="light-1"
      className={styles.card}
    >
      <CardHeader pad="medium">{t("question") + question.id}</CardHeader>
      <CardBody pad="medium" align="center">
        <Heading level="3" className={styles.questionTitle}>
          {t(question.question)}
        </Heading>
        <Box height="100%" width="100%">
          <Image src={question.image} alt={question.image} fit="contain" />
        </Box>
      </CardBody>
      <CardFooter
        pad={{ horizontal: "large", vertical: "medium" }}
        background="light-2"
        align="end"
        direction="column"
      >
        <Box direction="row" gap="small">
          <Button
            primary
            color="status-error"
            className={styles.button}
            label={t(question.negativeLabel)}
            onClick={() => onNegativeClick(question.negativeLink)}
          />
          <Button
            primary
            color="status-ok"
            className={styles.button}
            label={t(question.positiveLabel)}
            onClick={() => onPositiveClick(question.positiveLink)}
          />
        </Box>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;

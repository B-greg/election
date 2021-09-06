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
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";
import styles from "../styles/Home.module.css";
import theme from "../configs/theme";
import { QuestionType } from "../types";

export interface QuestionCardProps {
  question: QuestionType;
  onPositiveClick: (url: string | number) => void;
  onNegativeClick: (url: string | number) => void;
}

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { question, onPositiveClick, onNegativeClick } = props;
  return (
    <Card height="large" width="large" background="light-1">
      <CardHeader pad="medium">{question.question}</CardHeader>
      <CardBody pad="medium">Body</CardBody>
      <CardFooter pad={{ horizontal: "large" }} background="light-2">
        <Button
          primary
          label={question.positiveLabel}
          onClick={() => onPositiveClick(question.positiveLink)}
        />
        <Button
          label={question.negativeLabel}
          onClick={() => onNegativeClick(question.negativeLink)}
        />
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;

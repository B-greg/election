import { Button, Text } from "grommet";
import type { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import { QuestionCard } from "../components";
import AppLayout from "../components/AppLayout";
import { questions as questionsJson } from "../configs";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { QuestionType } from "../types";
import axios from "axios";

export const getServerSideProps = async () => {
  // Fake API Call, this can't call inner API
  const question = questionsJson.find((q) => q.id === 1);

  return {
    props: {
      question,
    },
  };
};

export interface QuestionProps {
  question: QuestionType;
}

const Question: NextPage<QuestionProps> = (props) => {
  const { question } = props;
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] =
    useState<QuestionType>(question);

  const fetchNextQuestion = (pid: string) => {
    axios.get<QuestionType>(`/api/questions/${pid}`).then((response) => {
      setCurrentQuestion(response.data);
    });
  };

  const handleQuestionClick = (url: string | number) => {
    if (typeof url === "number") {
      fetchNextQuestion(url.toString());
    } else {
      router.push(url);
    }
  };

  return (
    <AppLayout>
      <QuestionCard
        question={currentQuestion}
        onNegativeClick={handleQuestionClick}
        onPositiveClick={handleQuestionClick}
      />
    </AppLayout>
  );
};

export default Question;

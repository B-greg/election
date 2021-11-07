import { QuestionType } from "../types";

const questions: QuestionType[] = [
  {
    id: 1,
    image: "/imgs/2_man.jpg",
    question: "question_1",
    positiveLabel: "button.ok",
    positiveLink: 2,
    negativeLabel: "button.not_ok",
    negativeLink: "/result/gulag",
  },
  {
    id: 2,
    image: "/imgs/woman.jpg",
    question: "question_2",
    positiveLabel: "button.ok",
    positiveLink: 3,
    negativeLabel: "button.not_ok",
    negativeLink: "/result/gulag",
  },
  {
    id: 3,
    image: "/imgs/homeless.jpg",
    question: "question_3",
    positiveLabel: "button.ok",
    positiveLink: "/result/gulag",
    negativeLabel: "button.not_ok",
    negativeLink: 4,
  },
  {
    id: 4,
    image: "/imgs/nature.jpg",
    question: "question_4",
    positiveLabel: "button.ok",
    positiveLink: 5,
    negativeLabel: "button.not_ok",
    negativeLink: "/result/gulag",
  },
  {
    id: 5,
    image: "/imgs/melanine2.jpg",
    question: "question_5",
    positiveLabel: "button.ok",
    positiveLink: 6,
    negativeLabel: "button.not_ok",
    negativeLink: "/result/gulag",
  },
  {
    id: 6,
    image: "/imgs/teacher.jpg",
    question: "question_6",
    positiveLabel: "button.oui",
    positiveLink: "/result/pcf",
    negativeLabel: "button.non",
    negativeLink: 7,
  },
  {
    id: 7,
    image: "/imgs/worker.jpg",
    question: "question_7",
    positiveLabel: "button.oui",
    positiveLink: "/result/lo",
    negativeLabel: "button.non",
    negativeLink: "/result/npa",
  },
];

export default questions;

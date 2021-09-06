import { QuestionType } from "../types";

const questions: QuestionType[] = [
  {
    id: 1,
    image: "",
    question: "Pour vous deux hommes c'est?",
    positiveLabel: "OK",
    positiveLink: 2,
    negativeLabel: "Pas OK",
    negativeLink: "/result/gulag",
  },
  {
    id: 2,
    image: "",
    question: "Pour vous les femmes c'est?",
    positiveLabel: "OK",
    positiveLink: 3,
    negativeLabel: "Pas OK",
    negativeLink: "/result/gulag",
  },
  {
    id: 3,
    image: "",
    question: "Pour vous la misere et la pauvretee c'est?",
    positiveLabel: "OK",
    positiveLink: "/result/gulag",
    negativeLabel: "Pas OK",
    negativeLink: 4,
  },
  {
    id: 4,
    image: "",
    question: "Pour vous La nature c'est?",
    positiveLabel: "OK",
    positiveLink: 5,
    negativeLabel: "Pas OK",
    negativeLink: "/result/gulag",
  },
  {
    id: 5,
    image: "",
    question:
      "Exercez-vous ou avez exercer en temps que fonctionaire d'etat une profession dans l'education ou le social?",
    positiveLabel: "Oui",
    positiveLink: "/result/pcf",
    negativeLabel: "Non",
    negativeLink: 6,
  },
  {
    id: 6,
    image: "",
    question: "Ete vous un ouvrier?",
    positiveLabel: "Oui",
    positiveLink: "/result/lo",
    negativeLabel: "Non",
    negativeLink: "/result/npa",
  },
];

export default questions;

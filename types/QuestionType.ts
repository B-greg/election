interface QuestionType {
  id: number;
  question: string;
  image: string;
  positiveLabel: string;
  positiveLink: string | number;
  negativeLabel: string;
  negativeLink: string | number;
}

export default QuestionType;

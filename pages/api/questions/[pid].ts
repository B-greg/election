import { NextApiRequest, NextApiResponse } from "next";
import { QuestionType } from "../../../types";
import { questions } from "../../../configs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query;
  const question = questions.find((q) => pid.includes(q.id.toString()));

  res.status(200).json(question);
};

export default handler;

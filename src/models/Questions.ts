import { Answer } from "./Answers";

interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export default Question;

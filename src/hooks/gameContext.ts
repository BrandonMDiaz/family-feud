import React from "react";
import Question from "../models/Questions";

interface Game {
  questions: Question[];
  currentQuestion: number;
  totalPoints: {
    team: string;
    points: number;
  }[];
  areAllQuestionsAnswered: () => boolean;
  changeCurrentQuestions: () => void;
  addQuestions: (question: Question) => void;
}

export const game: Game = {
  questions: [],
  totalPoints: [],
  currentQuestion: 0,
  addQuestions(question: Question) {
    this.questions.push(question);
  },
  areAllQuestionsAnswered() {
    return this.questions.length === this.currentQuestion;
  },
  changeCurrentQuestions() {
    if (this.areAllQuestionsAnswered()) {
      this.currentQuestion += 1;
    }
  },
};

export const GameContext = React.createContext<Game>(game);

import React, { useState } from "react";
import * as Styles from "./styles";
import AnswerDisplay from "../Answer/AnswerDisplay";
import { Answer } from "../../models/Answers";
import playAudio from "../../common/utils/sound";

interface Props {
  answers: Answer[];
  onAnswerClick: (points: number) => void;
}
function AnswerBoard({ answers, onAnswerClick }: Props) {
  const [answersDisplayed, setAnswersDisplayed] = useState<string[]>([]);

  const displayAnswer = (id: string): boolean =>
    !!answersDisplayed.find((el) => el === id);

  const answerClicked = (answer: Answer) => {
    if (!displayAnswer(answer.id)) {
      setAnswersDisplayed([...answersDisplayed, answer.id]);
      playAudio("correct");
      onAnswerClick(answer.points);
    }
  };

  const halfLength = Math.ceil(answers.length / 2);
  const col1 = answers.slice(0, halfLength);
  const col2 = answers.slice(halfLength, answers.length);

  return (
    <Styles.OuterBorder>
      <Styles.Board>
        <Styles.Col1>
          {col1.map((el, index) => (
            <Styles.AnswerContainer
              key={el.id}
              onClick={() => answerClicked(el)}
            >
              <AnswerDisplay
                position={index + 1}
                answer={el.answer}
                points={el.points}
                display={displayAnswer(el.id)}
              ></AnswerDisplay>
            </Styles.AnswerContainer>
          ))}
        </Styles.Col1>
        <Styles.Col2>
          {col2.map((el, index) => (
            <Styles.AnswerContainer
              key={el.id}
              onClick={() => answerClicked(el)}
            >
              <AnswerDisplay
                position={index + 5}
                answer={el.answer}
                points={el.points}
                display={displayAnswer(el.id)}
              ></AnswerDisplay>
            </Styles.AnswerContainer>
          ))}
        </Styles.Col2>
      </Styles.Board>
    </Styles.OuterBorder>
  );
}

export default AnswerBoard;

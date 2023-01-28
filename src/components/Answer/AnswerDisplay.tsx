import React from "react";
import * as Styles from "./styles";

interface Props {
  position: number;
  answer: string;
  points: number;
  display?: boolean;
}

const AnswerDisplay = ({
  position,
  answer,
  points,
  display = false,
}: Props) => {
  return (
    <Styles.Container>
      {display ? (
        <Styles.ShowEffect>
          <Styles.AnswerContainer>{answer}</Styles.AnswerContainer>
          <Styles.PointsContainer>{points}</Styles.PointsContainer>
        </Styles.ShowEffect>
      ) : (
        <Styles.AnswerClosed>
          <Styles.Number>{position}</Styles.Number>
        </Styles.AnswerClosed>
      )}
    </Styles.Container>
  );
};

export default AnswerDisplay;

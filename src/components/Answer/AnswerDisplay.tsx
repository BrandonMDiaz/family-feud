import React, { useContext } from "react";
import * as Styles from "./styles";

interface Props {
  answer: string;
  points: number;
  display?: boolean;
}

const AnswerDisplay = ({ answer, points, display = false }: Props) => {
  return (
    <Styles.Container>
      <Styles.ShowEffect>
        <Styles.AnswerContainer>{answer}</Styles.AnswerContainer>
        <Styles.PointsContainer>{points}</Styles.PointsContainer>
      </Styles.ShowEffect>
    </Styles.Container>
  );
};

export default AnswerDisplay;

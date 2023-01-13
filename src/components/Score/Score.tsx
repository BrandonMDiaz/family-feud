import React from "react";
import * as Styles from "./styles";

interface Props {
  score: number;
}
function Score({ score }: Props) {
  return (
    <Styles.Container>
      <Styles.Text>{score}</Styles.Text>
    </Styles.Container>
  );
}

export default Score;

import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import Score from "../Score/Score";
import AnswerBoard from "../AnswersBoard/AnswersBoard";
import { GameContext } from "../../hooks/gameContext";

function Board() {
  const [points, setPoints] = useState(0);
  const gameContext = useContext(GameContext);
  const currentQuestion = gameContext.currentQuestion;
  const question = gameContext.questions[currentQuestion];

  return (
    <Styles.Container>
      <Styles.OuterBorder>
        <Styles.Board>
          <Score score={points}></Score>
          <AnswerBoard answers={question.answers}></AnswerBoard>
        </Styles.Board>
      </Styles.OuterBorder>
    </Styles.Container>
  );
}

export default Board;

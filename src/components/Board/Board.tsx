import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import Score from "../Score/Score";
import AnswerBoard from "../AnswersBoard/AnswersBoard";
import { GameContext } from "../../hooks/gameContext";
import { Button } from "@mui/material";
import playAudio from "../../common/utils/sound";

function Board() {
  const gameContext = useContext(GameContext);

  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    gameContext.currentQuestion
  );

  const question = gameContext.questions[currentQuestion];
  const nextQuestion = () => {
    if (gameContext.areAllQuestionsAnswered()) {
      //end game
    } else {
      gameContext.changeCurrentQuestion();
      setCurrentQuestion(gameContext.currentQuestion);
    }
  };
  const onAnswerClick = (pointsGained: number) => {
    setPoints(points + pointsGained);
  };
  return (
    <Styles.Container
      key={currentQuestion}
      onKeyDown={() => {
        playAudio("error");
      }}
    >
      <Styles.OuterBorder>
        <Styles.Board>
          <Score score={points}></Score>
          <AnswerBoard
            answers={question.answers}
            onAnswerClick={onAnswerClick}
          ></AnswerBoard>
        </Styles.Board>
      </Styles.OuterBorder>
      <Button onClick={nextQuestion}>Next</Button>
    </Styles.Container>
  );
}

export default Board;

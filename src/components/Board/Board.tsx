import React, { useState, useContext, useEffect } from "react";
import * as Styles from "./styles";
import Score from "../Score/Score";
import AnswerBoard from "../AnswersBoard/AnswersBoard";
import { GameContext } from "../../hooks/gameContext";
import { Button } from "@mui/material";
import playAudio from "../../common/utils/sound";

function Board() {
  const gameContext = useContext(GameContext);

  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);

  const detectKeyDown = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "x") {
      playAudio("error");
    }
    if (e.key === "1") {
    }
    if (e.key === "2") {
    }
    if (e.key === "3") {
    }
    if (e.key === "4") {
    }
    if (e.key === "5") {
    }
    if (e.key === "6") {
    }
    if (e.key === "7") {
    }
    if (e.key === "8") {
    }
  };

  const question = gameContext.game.questions[currentQuestion];
  const nextQuestion = () => {
    if (gameContext.game.questions.length === currentQuestion + 1) {
      //end game
    } else {
      gameContext.changePoints(points);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const onAnswerClick = (pointsGained: number) => {
    setPoints(points + pointsGained);
  };
  return (
    <Styles.Container key={currentQuestion}>
      <Styles.OuterBorder>
        <Styles.Board>
          <Score score={points}></Score>
          <AnswerBoard
            answers={question.answers}
            onAnswerClick={onAnswerClick}
          ></AnswerBoard>
        </Styles.Board>
      </Styles.OuterBorder>
      <Styles.BtnContainer>
        <Button onClick={nextQuestion}>Next</Button>
      </Styles.BtnContainer>
    </Styles.Container>
  );
}

export default Board;

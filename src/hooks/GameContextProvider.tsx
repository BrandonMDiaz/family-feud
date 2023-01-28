import React from "react";
import { GameContext, initialGameState } from "./gameContext";
import gameReducer from "./gameReducer";
import Question from "../models/Questions";
import { Teams } from "../models/Game";
import { gameActionTypes } from "../models/gameReducer";

interface Props {
  children: React.ReactNode;
}
const GameContextProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(
    gameReducer,
    initialGameState.game
  );

  const gameValue = {
    game: state,
    addQuestion: (question: Question) => {
      dispatch({ type: gameActionTypes.ADD_QUESTIONS, payload: question });
    },
    addTeams: (teams: Teams) => {
      dispatch({ type: gameActionTypes.ADD_TEAM, payload: teams });
    },
    changePoints: (points: number) => {
      dispatch({ type: gameActionTypes.CHANGE_TOTAL_POINTS, payload: points });
    },
  };
  return (
    <GameContext.Provider value={gameValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;

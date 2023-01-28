import { Game } from "../models/Game";
import { gameActionTypes } from "../models/gameReducer";

interface Action {
  type: gameActionTypes;
  payload: any;
}

const gameReducer = (gameState: Game, action: Action): Game => {
  switch (action.type) {
    case gameActionTypes.ADD_QUESTIONS:
      return {
        ...gameState,
        questions: [...gameState.questions, action.payload],
      };
    case gameActionTypes.ADD_TEAM:
      return {
        ...gameState,
        teams: action.payload,
      };

    case gameActionTypes.CHANGE_TOTAL_POINTS:
      return {
        ...gameState,
        totalPoints: action.payload,
      };
    default:
      return gameState;
  }
};

export default gameReducer;

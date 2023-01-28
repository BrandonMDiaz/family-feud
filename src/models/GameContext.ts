import { Game, Teams } from "./Game";
import Question from "./Questions";

export interface InitialGameState {
  game: Game;
  addQuestion: (question: Question) => void;
  addTeams: (teams: Teams) => void;
  changePoints: (points: number) => void;
}

import { createContext } from "react";
import Question from "../models/Questions";
import { Teams } from "../models/Game";
import { InitialGameState } from "../models/GameContext";

const team1 = {
  id: 0,
  name: "SuperDuperTeam",
};
const team2 = {
  id: 1,
  name: "ThePartyMachine",
};
const initialTeams: Teams = [team1, team2];

export const initialGameState: InitialGameState = {
  game: {
    questions: [],
    totalPoints: [],
    teams: initialTeams,
  },
  addQuestion: (question: Question) => {},
  addTeams: (teams: Teams) => {},
  changePoints: (points: number) => {},
};

export const GameContext = createContext<InitialGameState>(initialGameState);

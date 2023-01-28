import Question from "../models/Questions";

interface Points {
  team: string;
  points: number;
}
interface Team {
  id: number;
  name: string;
}
export type Teams = [Team, Team];
export interface Game {
  questions: Question[];
  totalPoints: Points[];
  teams: Teams;
}

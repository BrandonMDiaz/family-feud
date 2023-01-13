import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MenuPage from "./pages/Menu/Menu";
import QuestionsPage from "./pages/Questions/Questions";
import CreateQuestionAndAnswersPage from "./pages/CreateQuestions/CreateAnswers";
import Board from "./components/Board/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "preguntas",
    element: <QuestionsPage />,
  },
  {
    path: "/crear",
    element: <CreateQuestionAndAnswersPage />,
  },
  {
    path: "/jugar",
    element: <Board />,
  },
]);
export default router;

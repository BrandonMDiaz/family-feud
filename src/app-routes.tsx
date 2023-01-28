import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MenuPage from "./pages/Menu/Menu";
import QuestionsPage from "./pages/Questions/Questions";
import CreateQuestionAndAnswersPage from "./pages/CreateQuestions/CreateAnswers";
import Board from "./components/Board/Board";
import NavbarWrapper from "./pages/NavbarWrapper/NavbarWrapper";
import TeamsPage from "./pages/TeamsPage/TeamsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <MenuPage />,
      },
      {
        path: "equipos",
        element: <TeamsPage />,
      },
      {
        path: "preguntas",
        element: <QuestionsPage />,
      },
      {
        path: "crear",
        element: <CreateQuestionAndAnswersPage />,
      },
      {
        path: "jugar",
        element: <Board />,
      },
    ],
  },
]);
export default router;

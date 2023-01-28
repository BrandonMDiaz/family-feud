import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import * as GlobalStyles from "../../common/styles/global";
import { GameContext } from "../../hooks/gameContext";
import GroupsIcon from "@mui/icons-material/Groups";
import { Teams } from "../../models/Game";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TeamsPage() {
  const navigate = useNavigate();
  const gameContext = useContext(GameContext);
  const [teams, setTeams] = useState<Teams>(gameContext.game.teams);
  const onChange = (name: string, team: number) => {
    const newTeam = [...teams];
    newTeam[team] = { id: team, name };
    setTeams(newTeam as Teams);
  };
  const saveTeams = () => {
    gameContext.addTeams(teams);
  };

  const onContinueBtnClick = () => {
    saveTeams();
    navigate("/preguntas");
  };

  return (
    <GlobalStyles.Container>
      <GlobalStyles.Card>
        <GlobalStyles.CardTitle>
          <GlobalStyles.Title>Maspopular</GlobalStyles.Title>
        </GlobalStyles.CardTitle>
        <GlobalStyles.CardSubtitle>Crear equipos</GlobalStyles.CardSubtitle>
        <Styles.Container>
          <Styles.Col1>
            <Styles.Text>Team #1</Styles.Text>
            <GroupsIcon sx={{ fontSize: "80px" }}></GroupsIcon>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value, 0)
              }
              value={teams[0].name}
            ></TextField>
          </Styles.Col1>
          <Styles.Col2>
            <Styles.Text>Team #2</Styles.Text>
            <GroupsIcon></GroupsIcon>

            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value, 1)
              }
              value={teams[1].name}
            ></TextField>
          </Styles.Col2>
        </Styles.Container>
        <GlobalStyles.CustomButton onClick={onContinueBtnClick}>
          Continuar
        </GlobalStyles.CustomButton>
      </GlobalStyles.Card>
    </GlobalStyles.Container>
  );
}

export default TeamsPage;

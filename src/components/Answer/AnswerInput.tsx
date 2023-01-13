import React from "react";
import { Button, TextField, Input } from "@mui/material";
import { Answer } from "../../models/Answers";

interface Props extends Answer {
  onInputChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    id: string
  ) => void;
  onDelete: (id: string) => void;
}

const AnswerInput = ({ id, onInputChange, onDelete }: Props) => {
  return (
    <tr>
      <td>
        <TextField
          id="answer"
          label="Respuesta"
          variant="outlined"
          onChange={(e) => onInputChange(e, id)}
        />
      </td>
      <td>
        <Input
          id="points"
          type="number"
          placeholder="puntos"
          onChange={(e) => onInputChange(e, id)}
        />
      </td>
      <td>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default AnswerInput;
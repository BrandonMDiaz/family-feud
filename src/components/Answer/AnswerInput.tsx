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
    <React.Fragment>
      <tr>
        <td>
          <TextField
            id="answer"
            fullWidth
            label="Respuesta"
            variant="outlined"
            onChange={(e) => onInputChange(e, id)}
          />
        </td>
        <td className="points">
          <Input
            fullWidth
            type="number"
            onChange={(e) => onInputChange(e, id)}
          />
        </td>
        <td>
          <Button onClick={() => onDelete(id)} style={{ color: "red" }}>
            Delete
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default AnswerInput;

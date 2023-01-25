import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as GlobalStyles from "../../common/styles/global";

interface Props {
  btnText: string;
  dialogTitle: string;
  dialogText: string;
  cancelBtnText: string;
  successBtnText: string;
  onSuccess: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: () => void;
  onThirdOption?: () => void;
}
export default function CustomDialog({
  btnText,
  dialogTitle,
  dialogText,
  cancelBtnText,
  successBtnText,
  onSuccess,
  onCancel,
}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const successClick = (e: React.MouseEvent<HTMLElement>) => {
    onSuccess(e);
    handleClose();
  };
  const cancelClick = () => {
    if (onCancel) {
      onCancel();
    }
    handleClose();
  };
  return (
    <div>
      <GlobalStyles.CustomButton onClick={handleClickOpen}>
        {btnText}
      </GlobalStyles.CustomButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={successClick} autoFocus>
            {successBtnText}
          </Button>
          <Button variant="contained" onClick={cancelClick}>
            {cancelBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, Icon, Slide} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import {Alert} from "mdi-material-ui";

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function DeleteDialog({closeFunction, setOpen, open, company}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    closeFunction(company)
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{display: "flex", gap: 2}}>
        <Icon color="warning" component={Alert}/>

        حذف </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          ایا از حذف {company.name} مطمئن هستید؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete}>بله</Button>
        <Button onClick={handleClose}>خیر</Button>

      </DialogActions>
    </Dialog>
  )

}

export default DeleteDialog;

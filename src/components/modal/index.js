import {
  Dialog, DialogContent, makeStyles,
  Typography
} from "@material-ui/core";
import {
  Close as CloseIcon
} from "@material-ui/icons";
import React from "react";

const ComponentModal = (props) => {
  const { open, setOpen, children, maxWidth, title, } = props;
  const classes = useStyles(maxWidth);

  return (
    <Dialog
      onClose={setOpen}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <header>
          <Typography classes={{ root: classes.title }}>{title}</Typography>
          <CloseIcon onClick={setOpen} classes={{ root: classes.closeIcon }} />
        </header>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    margin: "0 auto",
    "& .MuiDialogContent-root:first-child": {
      paddingTop: 0,
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiDialog-paperWidthSm": {
        maxWidth: props=>props,
        minWidth: props=>props,
      },
    },
  },
  paper: {
    // maxWidth: "800px",
    margin: 0,
    width: "calc(100% - 30px)",
  },
  DialogContent: {
    color: "#000",
    padding: "0 15px 15px",
    "& header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 15,
      position: "sticky",
      top: 0,
      left: 0,
      background: "#fff",
      paddingTop: 15,
      zIndex: 99,
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 50px 50px",
      "& header": {
        paddingTop: 50,
        paddingBottom: 30,
      },
    },
  },
  title: {
    fontFamily: "ArchivoBlack",
    fontSize: 20,
    lineHeight: "24px",
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
  },
  closeIcon: {
    fontSize: "30px",
    cursor: "pointer",
  },
}));

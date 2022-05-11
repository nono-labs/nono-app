import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import clsx from "clsx";

export default function TextBtn(props) {
  const {
    text,
    disableRipple = true,
    style = {},
    className,
    onClick,
    startIcon,
  } = props;
  const classes = useStyle();

  return (
    <Button
      style={style}
      onClick={onClick}
      startIcon={startIcon && <img src={startIcon} />}
      disableRipple={disableRipple}
      classes={{
        root: clsx(classes.buttonText, onClick && classes.buttonBtn, className),
      }}
    >
      <span>{text}</span>
    </Button>
  );
}

const useStyle = makeStyles((theme) => ({
  buttonText: {
    fontFamily: "ArchivoBlack",
    alignItems: "center",
    cursor: "pointer",
    boxSizing: "border-box",
    border: "0.5px solid #000000",
    borderRadius: theme.custom.palette.radius10,
    background: "#fff",
    justifyContent: "space-between",
    padding: "0 23px",
    height: "40px",
    lineHeight: "40px",
    alignItems: "center",
    userSelect: "none",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      padding: "0 8px",
      fontSize: "13px",
      borderRadius: theme.custom.palette.radius5,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    "& img": {
      display: "inline-black",
      width: "18px",
    },
  },
  buttonBtn: {
    background: "#000",
    color: "#fff",
    "&:hover": {
      background: "#000",
    },
  },
}));

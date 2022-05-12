import React from "react";
import { makeStyles, Button, CircularProgress } from "@material-ui/core";
import clsx from "clsx";

export default function TextBtn(props) {
  const {
    text,
    disableRipple = true,
    style = {},
    className,
    onClick,
    startIcon,
    loading,
    bg, // 0 white ;1 #62929E
    pd, //padding
    md, //margin
    mw, // max-width
  } = props;
  const classes = useStyle(props);

  return (
    <Button
      style={style}
      onClick={onClick}
      startIcon={
        (loading && (
          <CircularProgress size={20} className={classes.buttonProgress} />
        )) ||
        (startIcon && <img src={startIcon} />)
      }
      disableRipple={disableRipple}
      classes={{
        root: clsx(
          classes.buttonText,
          onClick && classes.buttonBtn,
          bg == 0 && classes.buttonBtnWhite,
          bg == 1 && classes.buttonBtnTheme,
          className
        ),
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
    cursor: "inherit",
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
    paddingLeft: (props) => props.pd,
    paddingRight: (props) => props.pd,
    maxWidth: (props) => props.mw,
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
    "&:hover": {
      background: "transparent",
    },
  },
  buttonBtn: {
    background: "#000",
    color: "#fff",
    cursor: (props) => (props.loading ? "inherit" : "pointer"),
    "&:hover": {
      background: "#000",
    },
  },
  buttonBtnWhite: {
    background: "#fff",
    color: "#000",
    cursor: (props) => (props.loading ? "inherit" : "pointer"),
    "&:hover": {
      background: "transparent",
    },
  },
  buttonBtnTheme: {
    background: "#62929E",
    color: "#fff",
    cursor: (props) => (props.loading ? "inherit" : "pointer"),
    border: "0.5px solid #62929E",
    "&:hover": {
      background: "#62929E",
    },
  },
}));

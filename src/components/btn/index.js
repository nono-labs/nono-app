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
    endIcon,
    icons,
    loading,
    bg, // 0 white ;1 #62929E
    pd, //padding
    md, //margin
    mw, // max-width
    width,
    widthM, //mobile
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
        (icons && startIcon) ||
        (startIcon && <img src={startIcon} />)
      }
      endIcon={endIcon}
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
    height: "40px",
    lineHeight: "40px",
    alignItems: "center",
    userSelect: "none",
    textTransform: "none",
    width: (props) => props.width || 150,
    justifyContent: "center",
    paddingLeft: (props) => props.pd,
    paddingRight: (props) => props.pd,
    [theme.breakpoints.down("md")]: {
      padding: "0 8px",
      fontSize: "13px",
      // borderRadius: theme.custom.palette.radius5,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: (props) => props.widthM || 120,
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

import Images from "@/constant";
import {
  Box, Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import {
  GitHub as GitHubIcon,
  Telegram as TelegramIcon, Twitter as TwitterIcon
} from "@material-ui/icons";
import React from "react";

const contract = [
  { link: "1", avatar: <TwitterIcon /> },
  { link: "2", avatar: <img src={Images.discord} /> },
  { link: "3", avatar: <TelegramIcon /> },
  { link: "4", avatar: <GitHubIcon /> },
];
export default function Profile() {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Grid container alignItems="center" justifyContent="space-between">
        {contract.map((obj) => (
          <Grid item sm={3} key={obj.link}>
            <a className={classes.linkIcon} >
              {obj.avatar}
            </a>
          </Grid>
        ))}
      </Grid>
      <Box className={classes.docBtn}>DOC</Box>
      <Typography className={classes.footer}>© 2022 Nonfungibles</Typography>
    </Box>
  );
}
const useStyle = makeStyles((theme) => ({
  root: {
    padding: 15,
    marginBottom: 50,
    borderRadius: 10,
    backdropFilter: "blur(21px)",
    border: "2px solid #FFFFFF",
    zIndex: 9999,
    width: 150,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 106,
      border: 0,
      width: "100%",
      paddingBottom: 0,
    },
  },
  linkIcon: {
    cursor: "pointer",
    "& svg": {
      height: 20,
    },
  },
  docBtn: {
    height: 32,
    cursor: "pointer",
    background: "#fff",
    borderRadius: 5,
    border: "1px solid  #fff",
    lineHeight: "30px",
    textAlign: "center",
    color: "#000",
    margin: "15px 0",
    fontFamily: "ArchivoBlack",
    [theme.breakpoints.down("xs")]: {
      margin: "30px 0",
      background: "#000",
      color: "#fff",
    },
  },
  footer: {
    fontSize: 10,
    lineHeight: "10px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      lineHeight: "14px",
    },
  },
}));

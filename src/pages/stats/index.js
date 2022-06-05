import TextBtn from "@/components/btn";
import NFT from "@/components/NFT";
import Images from "@/constant";
import { Box, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import TopCollections from "../home/top";
export default function Home(props) {
  const classes = useStyle();
  return (
    <Box>
     
      <TopCollections />
     
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  itemCenter: {
    background: "#fff",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    padding: "69px 50px 69px 100px",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      padding: theme.padding.md20,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.padding.md15,
      display: "flex",
    },
  },
  box: {
    flex: 1,
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",
      flexDirection: "column",
      "& button": {
        fontSize: "14px",
        marginBottom: theme.custom.palette.mdspacing,
      },
    },
  },
  left: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.custom.palette.mdspacing,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.padding.md15,
    },
  },
  title: {
    fontFamily: "ArchivoBlack",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "54px",
    color: "#000000",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      paddingBottom: "23px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: theme.padding.md15,
    },
  },
  titleBottom: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "0px",
    },
  },
  subTitle: {
    fontSize: "18px",
    lineHeight: "27px",
    color: "#333333",
    paddingBottom: "50px",
    [theme.breakpoints.between("sm", "md")]: {
      paddingBottom: theme.custom.palette.mdspacing,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      paddingBottom: "13px",
    },
  },
  rewardImg: {
    marginRight: "50px",
    [theme.breakpoints.down("md")]: {
      marginRight: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      display: "flex",
    },
  },
  btnSpace: {
    marginRight: "50px",
    [theme.breakpoints.down("md")]: {
      marginRight: "20px",
    },
  },
  nftWrap: {
    maxWidth: 300,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
}));

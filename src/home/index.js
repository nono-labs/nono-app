import TextBtn from "@/components/btn";
import NFT from "@/components/NFT";
import Images from "@/constant";
import { Box, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import TopCollections from "./top";
export default function Home(props) {
  console.log("home");
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.itemCenter}>
        <div className={classes.left}>
          <div className={classes.title}>
            Trade to Earn,
            <br />
            Keep for More
          </div>
          <div className={classes.subTitle}>
            Buy or sell NFTs to earn $NONO
            <br />
            50% trading fee income will be used for $NONO buyback
            <br />
            List your NFT or explore the market to get started
          </div>
          <div className={classes.box}>
            <TextBtn
              mw={250}
              className={classes.btnSpace}
              onClick={() => {}}
              text={"List an NFT"}
            />
            <TextBtn mw={250} text={"Explore NFTs"} />
          </div>
        </div>
        <NFT className={classes.nftWrap} trending={true} />
      </Box>
      <TopCollections />
      <Grid container className={classes.itemCenter}>
        <div className={classes.left}>
          <div className={clsx(classes.title, classes.titleBottom)}>
            Ready to Get Your Rewards?
          </div>
          <div className={classes.subTitle}>
            Our Users Should Be Our Holders,
            <br />
            And They All Deserves Our Profit Shares.
          </div>
          <div className={classes.box}>
            <TextBtn
              mw={250}
              className={classes.btnSpace}
              onClick={() => {}}
              text={"Claim Your Rewards"}
            />
            <TextBtn mw={250} text={"Learn More"} />
          </div>
        </div>
        <img className={classes.rewardImg} src={Images.rewardBanner} />
      </Grid>
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

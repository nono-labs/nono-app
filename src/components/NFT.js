import Images from "@/constant";
// import { toDecimal } from "@/utils/web3Tools";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    position: "relative",
  },
  CardContent: {
    padding: theme.custom.palette.mdspacing,
    [theme.breakpoints.down("xs")]: {
      padding: theme.padding.md10,
    },
  },
  nftImage: {
    width: "100%",
    paddingBottom: "100%",
    height: 0,
  },
  collection: {
    fontSize: "18px",
    lineHeight: "18px",
    display: "flex",
    "& img": {
      margin: "0 5px",
      [theme.breakpoints.down("xs")]: {
        width: 14,
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  longText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  unlisted: {
    fontSize: "14px",
    fontWeight: 400,
  },
  author: {
    fontStyle: "italic",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#62929E",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "14px",
    },
  },
  offer: {
    fontSize: "14px",
    marginBottom: 0,
  },
  iconBox: {
    padding: "7px 10px 7px 10px",
    borderRadius: "30px",
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    right: "10px",
    bottom: "10px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
    "& span": {
      marginLeft: "5px",
      fontSize: "18px",
      lineHeight: "18px",
      color: (props) => (props.isLiked ? "#FF2E2E" : "#FFF"),
      opacity: 1,
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "14px",
      },
    },
    "& svg": {
      width: 18,
      height: 16,
    },
  },
  trending: {
    padding: "7px 10px",
    fontSize: 18,
    lineHeight: "18px",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    display: "inline-block",
    position: "absolute",
    top: "10px",
    left: "10px",
  },
}));
export default function NFT(props) {
  const { trending, item } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  // console.log(item, "item");
  return (
    <Card
      variant="outlined"
      onClick={() => navigate("/explore/details")}
      style={props?.style}
      className={clsx(classes.root, props?.className)}
    >
      {item ? (
        <div className={classes.nftImage} style={{ position: "relative" }}>
          <CardMedia component="img" alt="image error" image={Images.nft} />
          {trending && (
            <Typography className={classes.trending}>Trending</Typography>
          )}
          <Typography className={classes.iconBox}>
            <FavoriteIcon htmlColor={item?.isLiked ? "#FF2E2E" : "#fff"} />
            <span>{item?.likeCount}</span>
          </Typography>
        </div>
      ) : (
        <Skeleton variant="rect" className={classes.nftImage} />
      )}
      <Box className={classes.CardContent}>
        {item ? (
          <div className={classes.controls}>
            <Box className={clsx(classes.collection, classes.longText)}>
              {item?.name}
            </Box>
            <Box className={classes.collection}>
              <img src={Images.eth} />
              {/* {toDecimal(item?.price)} */}
              1.2
            </Box>
            {/* <Typography className={clsx(classes.collection,classes.unlisted)} paragraph>
                    Unlisted
                </Typography> */}
          </div>
        ) : (
          <Skeleton variant="rect" className={classes.controls} />
        )}
        <Grid
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          container
          wrap="nowrap"
        >
          {item ? (
            <>
              <Box className={clsx(classes.author, classes.longText)}>
                {item?.nickName}
              </Box>
              <Typography className={clsx(classes.collection, classes.offer)}>
                offer
                <img src={Images.weth} />
                1.62
              </Typography>
            </>
          ) : (
            <Skeleton width={"100%"} />
          )}
        </Grid>
      </Box>
    </Card>
  );
}

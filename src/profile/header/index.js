import NFT from "@/components/NFT";
import {
  Grid,
  Hidden,
  makeStyles,
  Box,
  Typography,
  Divider,
  ClickAwayListener,
  Snackbar,
} from "@material-ui/core";
import React, { useState } from "react";
import Images from "@/constant";
import clsx from "clsx";
import TextBtn from "@/components/btn";
import MuiAlert from "@material-ui/lab/Alert";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";
import Convert from "@/components/detailModal/convert";
import Edit from "../components/edit";
import ShareItem from "@/components/ShareItem";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Profile(props) {
  const classes = useStyle();
  const [visibleC, setVisibleC] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState({
    open: false,
    convert: false,
    edit: false,
  });

  const handleClick = () => {
    setVisible(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setVisible(false);
  };
  const onFocusLoss = () => {
    console.log("onFcousLoss");
    setOpen(false);
  };
  return (
    <Box className={classes.box}>
      <Grid
        className={classes.boxGridMobile}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Box className={clsx(classes.grid, classes.mobileGrid)}>
          <img className={classes.avatarImg} src={Images.avatar} />
          <Box className={classes.avatarBoxMobile}>
            <Typography className={classes.name}>0xc4c16...acb21a</Typography>
            <Typography className={classes.address}>
              0xc4c16...acb21a
            </Typography>
            <img className={classes.twitter} src={Images.twitter} />
          </Box>
        </Box>
        <Box className={classes.right}>
          <Box className={clsx(classes.grid, classes.mobileGrid)}>
            <Box className={classes.floorPriceBox}>
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <img src={Images.eth} />
                ETH
                <span>0.76</span>
              </Box>
              <Divider
                className={classes.divider}
                orientation="vertical"
                flexItem
              />
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <img src={Images.eth} />
                ETH
                <span>0.76</span>
              </Box>
            </Box>
            <TextBtn
              onClick={() =>
                setVisible({
                  ...visible,
                  convert: true,
                })
              }
              bg={0}
              widthM={150}
              className={classes.convertBtn}
              text="Convert ETH/WETH"
            />
          </Box>
          <Box className={clsx(classes.grid, classes.BtnTop)}>
            <TextBtn
              startIcon={Images.edit1}
              onClick={() => {
                setVisible({
                  ...visible,
                  edit: true,
                });
              }}
              className={classes.convertBtn}
              text="Edit Profile"
            />
            <ClickAwayListener onClickAway={onFocusLoss}>
              <Box className={classes.root}>
                <TextBtn
                  startIcon={Images.share}
                  endIcon={<KeyboardArrowUpIcon />}
                  onClick={() => setOpen(true)}
                  className={classes.convertBtn}
                  text="Share"
                />
                <Hidden xsDown>
                  {open && (
                    <Box className={classes.dropdown}>
                      <Typography
                        onClick={() => {
                          setOpen(false);
                          setVisible(true);
                        }}
                        className={classes.dropdownItem}
                      >
                        Copy Link
                      </Typography>
                      <Divider className={classes.divider1} flexItem />
                      <Typography className={classes.dropdownItem}>
                        Share on Twitter
                      </Typography>
                    </Box>
                  )}
                </Hidden>
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      </Grid>
      {/* <Snackbar open={visible} autoHideDuration={2000} anchorOrigin={["bottom","top"]} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        This is a success message!
        </Alert>
      </Snackbar> */}
      <Convert
        open={visible.convert}
        setOpen={() =>
          setVisible({
            ...visible,
            convert: false,
          })
        }
      />
      <Edit
        open={visible.edit}
        setOpen={() =>
          setVisible({
            ...visible,
            edit: false,
          })
        }
      />
       <Hidden smUp><ShareItem open={open} setOpen={()=>setOpen(false)} /></Hidden>
    </Box>
  );
}
const useStyle = makeStyles((theme) => ({
  box: {
    background: "#fff",
    padding: "30px 50px",
    marginBottom: 50,
    borderRadius: 20,
    backdropFilter: "blur(21px)",
    [theme.breakpoints.down("md")]: {
      padding: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
    },
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mobileGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  boxGridMobile: {
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  right: {
    alignSelf: "flex-end",
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
    },
  },
  avatarImg: {
    width: 120,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginRight: 20,
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
      marginBottom: 10,
    },
  },
  name: {
    fontSize: 24,
    lineHeight: "24px",
  },
  address: {
    fontSize: 14,
    lineHeight: "24px",
    color: "#62929E",
    paddingBottom: 15,
    paddingTop: 15,
    fontStyle: "italic",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: 10,
      paddingTop: 10,
    },
  },
  twitter: {
    cursor: "pointer",
  },
  floorPriceBox: {
    display: "flex",
    alignItems: "center",
    border: "0.5px solid #000",
    borderRadius: 10,
    height: 40,
    padding: "0  15px",
    [theme.breakpoints.down("md")]: {
      marginBottom: 15,
      // paddingTop: 10,
    },
  },
  floorItem: {
    fontSize: 14,
    "& img": {
      width: 18,
      height: 18,
      marginRight: 3,
    },
    "& span": {
      fontSize: 14,
      marginLeft: 32,
    },
  },
  divider: {
    background: "#000",
    width: 0.5,
    margin: "0 15px",
  },
  convertBtn: {
    fontSize: 12,
    marginLeft: 50,
    borderWidth: 2,
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
  },
  priceBox: {
    display: "flex",
  },
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 45,
    right: 0,
    zIndex: 1,
    width: 150,
    border: "1px solid #000",
    borderRadius: 10,
    backgroundColor: "#000",
    zIndex: 9999,
  },
  divider1: {
    background: "#fff",
    height: 1,
  },
  dropdownItem: {
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    fontSize: 14,
    color: "#fff",
    cursor: "pointer",
  },
  BtnTop: {
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  avatarBoxMobile: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

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
    // console.log("onFcousLoss");
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
            <Typography className={classes.desc}>
              A unique collection of 7,979 3D hand-drawn Prime Apes
            </Typography>

            <img className={classes.twitter} src={Images.twitter} />
          </Box>
        </Box>
        <Box className={classes.right}>
          <Box className={clsx(classes.grid, classes.mobileGrid)}>
          <Hidden xsDown>
            <Box className={classes.floorPriceBox}>
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <span>Floor</span>
                <img src={Images.eth} />
                0.76
              </Box>
              <Divider
                className={classes.divider}
                orientation="vertical"
                flexItem
              />
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <span>Total Vol</span>
                <img src={Images.eth} />
                6.75
              </Box>
              <Divider
                className={classes.divider}
                orientation="vertical"
                flexItem
              />
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <span>Items</span>
                <img src={Images.eth} />
                1,345
              </Box>
              <Divider
                className={classes.divider}
                orientation="vertical"
                flexItem
              />
              <Box className={clsx(classes.grid, classes.floorItem)}>
                <span>Owners</span>
                133
              </Box>
            </Box>
            </Hidden>
            <Hidden smUp>

            <Grid className={classes.gridBox} container>
              <Grid item xs={6}>
                <Box className={classes.girdItem}>
                  <span>Floor</span>
                  <img src={Images.eth} />
                  0.76
                </Box>
              </Grid>
              <Divider
                className={classes.dividerGrid1}
                orientation="vertical"
                flexItem
              />
              <Divider className={classes.dividerGrid2} flexItem />
              <Grid item xs={6}>
                <Box className={classes.girdItem}>
                  <span>Floor</span>
                  <img src={Images.eth} />
                  0.76
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.girdItem}>
                  <span>Floor</span>
                  <img src={Images.eth} />
                  0.76
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.girdItem}>
                  <span>Floor</span>
                  <img src={Images.eth} />
                  0.76
                </Box>
              </Grid>
            </Grid>
            </Hidden>
          </Box>
          <Box className={clsx(classes.grid, classes.BtnTop)}>
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
                    <Box className={classes.dropdownItem}>
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
      <Hidden smUp>
        <ShareItem open={open} setOpen={() => setOpen(false)} />
      </Hidden>
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
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
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
      width: '100%'
    },
  },
  avatarImg: {
    width: 120,
    marginRight: 30,
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
    fontSize: 18,
    lineHeight: "18px",
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
  desc: {
    fontSize: 14,
    lineHeight: "21px",
    marginBottom: 15,
    fontFamily: "BarlowRegular",
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
    },
  },
  floorItem: {
    fontSize: 14,
    "& img": {
      width: 18,
      height: 18,
      marginRight: 5,
    },
    "& span": {
      fontSize: 12,
      fontFamily: "BarlowRegular",
      marginRight: 5,
    },
  },
  divider: {
    background: "#000",
    width: 0.5,
    margin: "0 15px",
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
  gridBox: {
    border: "0.5px solid #000",
    borderRadius: 10,
    position: "relative",
  },
  girdItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    height: 40,

    "& img": {
      width: 18,
      height: 18,
      marginRight: 5,
    },
    "& span": {
      fontSize: 12,
      fontFamily: "BarlowRegular",
      marginRight: 5,
    },
  },
  dividerGrid1: {
    position: "absolute",
    left: "50%",
    width: 0.5,
    height: "100%",
    background: "#000",
  },
  dividerGrid2: {
    position: "absolute",
    top: "50%",
    height: 0.5,
    width: "100%",
    background: "#000",
  },
}));

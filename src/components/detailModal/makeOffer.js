import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
  InputBase,
  Box,
  Grid,
  Divider,
} from "@material-ui/core";
import Images from "@/constant";
import { useTheme } from "@material-ui/styles";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import TextBtn from "@/components/btn";
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@material-ui/icons";
const titleMenu = {
  0: "Buy Now",
  1: "Make Offer",
};
const ComponentModal = (props) => {
  const { open, setOpen, current } = props; //current 0 bug now; 1 make offer
  const theme = useTheme();

  const classes = useStyles();

  return (
    <Dialog
      onClose={setOpen}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <header>
          <Typography classes={{ root: classes.title }}>
            {titleMenu[current]}
          </Typography>
          <CloseIcon onClick={setOpen} classes={{ root: classes.closeIcon }} />
        </header>
        <Grid
          className={classes.card}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Box className={classes.nftCard}>
            <img src={Images.nft} />
          </Box>
          <Box>
            <Typography className={classes.nftTitle}>The Sevens</Typography>
            <Typography className={clsx(classes.nftTitle, classes.nftName)}>
              Meebit
            </Typography>
          </Box>
        </Grid>
        <Grid
          className={classes.cardList}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Box className={classes.label}>List Price</Box>
          <Box className={classes.price}>
            <img src={Images.eth} />
            0.75
          </Box>
        </Grid>
        {current == 1 && (
          <Grid
            className={classes.cardList}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={classes.label}>Best Offer</Box>
            <Box className={classes.price}>
              <img src={Images.weth} />
              0.68
            </Box>
          </Grid>
        )}

        <Divider className={classes.divider} />
        {current == 1 && (
          <>
            <Grid
              className={classes.cardList}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className={classes.label}>Your Offer</Box>
              <Box className={classes.inputBox}>
                <InputBase className={classes.input} />
                <Divider
                  className={classes.divider1}
                  orientation="vertical"
                  flexItem
                />
                <Box className={classes.priceBox}>
                  <img src={Images.weth} />
                  WETH
                </Box>
              </Box>
            </Grid>
            <Grid
              className={classes.cardList}
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className={classes.label}>Validity</Box>
              <Box className={classes.inputBox}>
                <Box className={clsx(classes.input, classes.validity)}>
                  3Days
                  <ExpandMoreIcon htmlColor={theme.palette.secondary.main} />
                </Box>
                <Divider
                  className={classes.divider1}
                  orientation="vertical"
                  flexItem
                />
                <Box className={classes.priceBox}>
                  <img src={Images.date} />
                </Box>
              </Box>
            </Grid>
          </>
        )}
        {current == 0 && (
          <Grid
            className={classes.cardList}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={classes.label}>Total</Box>
            <Box className={classes.price}>
              <img src={Images.eth} />
              0.75
              <Typography className={classes.dollar}>($1254.32)</Typography>
            </Box>
          </Grid>
        )}
        <Grid container justifyContent="center" alignItems="center">
          <TextBtn
            onClick={() => {}}
            loading={true}
            text={titleMenu[current]}
          />
          {current == 1 && (
            <TextBtn
              className={classes.btnLeft}
              bg={0}
              onClick={() => {}}
              text="Convert WETH"
            />
          )}
        </Grid>
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
        maxWidth: 500,
        minWidth: 500,
      },
    },
  },
  paper: {
    maxWidth: "800px",
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
  card: {
    marginBottom: 20,
  },
  nftCard: {
    width: 80,
    height: 80,
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  nftTitle: {
    fontSize: 18,
    lineHeight: "27px",
    marginBottom: 15,
  },
  nftName: {
    color: "#62929E",
    fontStyle: "italic",
    color: "#62929E",
  },
  cardList: {
    lineHeight: "24px",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
  },
  price: {
    display: "flex",
    alignItems: "center",
    fontSize: 24,
    "&  img": {
      width: 24,
      marginRight: 5,
    },
  },
  divider: {
    background: "#000",
    marginBottom: 30,
  },
  divider1: {
    background: "#62929E",
    width: 2,
  },
  inputBox: {
    display: "flex",
    height: 32,
    boxSizing: "border-box",
    border: "2px  solid #62929E",
    borderRadius: 16,
  },
  input: {
    width: 120,
    padding: "0 15px",
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    width: 80,
    justifyContent: "center",
    "& img": {
      marginRight: 5,
    },
  },
  validity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#62929E",
  },

  btnLeft: {
    marginLeft: 50,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 15,
    },
  },
  dollar: {
    fontSize: 14,
    paddingLeft: 10,
    fontFamily: "BarlowRegular",
  },
}));

import TextBtn from "@/components/btn";
import Modal from "@/components/modal";
import Images from "@/constant";
import {
  Box,
  Divider,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";
import Convert from "./convert";

const titleMenu = {
  0: "Buy Now",
  1: "Make Offer",
};
const ComponentModal = (props) => {
  const { open, setOpen, current } = props; //current 0 bug now; 1 make offer
  const theme = useTheme();
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      maxWidth={500}
      title={titleMenu[current]}
    >
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
          widthM={150}
          onClick={() => {}}
          loading={true}
          text={titleMenu[current]}
        />
        {current == 1 && (
          <TextBtn
            widthM={150}
            className={classes.btnLeft}
            bg={0}
            onClick={() => {
              setVisible(true);
            }}
            text="Convert WETH"
          />
        )}
      </Grid>
      <Convert open={visible} setOpen={() => setVisible(false)} />
    </Modal>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
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

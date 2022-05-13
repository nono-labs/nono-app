import TextBtn from "@/components/btn";
import Modal from "@/components/modal";
import Images from "@/constant";
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  Table,
  TableBody,
  Divider,
  Button,
  InputBase,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";
const ComponentModal = (props) => {
  const { open, setOpen } = props;

  const classes = useStyles();

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      maxWidth={500}
      title={"Convert ETH/WETH"}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography className={classes.label}>Convert</Typography>
        <Typography className={classes.value}>Balance:0.00357</Typography>
      </Grid>
      <Box className={classes.inputBox}>
        <InputBase className={classes.input} />
        <Typography className={classes.max}>Max</Typography>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Box className={classes.priceBox}>
          <img src={Images.eth} />
          ETH
        </Box>
      </Box>
      <Grid className={classes.trans} container justifyContent="center">
        <img src={Images.convert} />
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography className={classes.label}>To</Typography>
      </Grid>
      <Box className={classes.inputBox}>
        <InputBase className={classes.input} />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Box className={classes.priceBox}>
          <img src={Images.weth} />
          wETH
        </Box>
      </Box>
      <Grid className={classes.btn} container justifyContent="center">
        <TextBtn text='Convert' onClick={()=>{}} />
      </Grid>
    </Modal>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 18,
    lineHeight: "27px",
  },
  value: {
    fontSize: 14,
    lineHeight: "27px",
    fontFamily: "BarlowRegular",
  },
  inputBox: {
    display: "flex",
    alignItems: 'center',
    height: 32,
    boxSizing: "border-box",
    border: "2px  solid #62929E",
    borderRadius: 16,
    marginTop: 15,
  },
  input: {
    flex: 1,
    padding: "0 15px",
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    width: 80,
    fontSize: 12,
    justifyContent: "center",
    "& img": {
      width: 18,
      marginRight: 5,
    },
  },
  divider: {
    background: "#62929E",
    width: 2,
  },
  trans: {
    margin: '20px 0',
    '& img':  {
      cursor: 'pointer',
    }
  },
  btn: {
    marginTop: 30,
  },
  max: {
    fontSize: 12,
    lineHeight: '16px',
    textAlign: 'center',
    boxSizing: 'border-box',
    height: 20,
    width: 40,
    border: '2px solid #62929E',
    borderRadius: 5,
    color: '#62929E',
    cursor: 'pointer',
    userSelect: 'none',
    marginRight:  5,
  }
}));

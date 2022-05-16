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
    <Modal open={open} setOpen={setOpen} maxWidth={500} title={"Edit Profile"}>
      <Box className={classes.box}>
        <Typography className={classes.title}>Profile Image</Typography>
        <Grid container alignItems="center">
          <img className={classes.avatar} src={Images.avatar} />
          <Box className={classes.grid}>
            <TextBtn className={classes.btnStyle} onClick={()=>{}} text='Choose NFT' />
            <TextBtn className={classes.btnStyle} onClick={()=>{}} text='Remove' />
          </Box>
        </Grid>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.title}>Name</Typography>
        <InputBase placeholder="Please input name" className={classes.input} />
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.title}>Twitter</Typography>
        <InputBase placeholder="https://twitter.com/" className={classes.input} />
      </Box>
      <Grid className={classes.btn} container justifyContent="center">
        <TextBtn text="Save" onClick={() => {}} />
      </Grid>
    </Modal>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    lineHeight: "27px",
    marginBottom: 15,
  },
  avatar: {
    marginRight: 30,
    width: 90,
    height: 90,
  },
  btnStyle: {
    width: 100,
    height: 32,
    lineHeight: '32px',
    fontSize: 12,
    '&:first-child': {
      marginBottom: 15,
    }
  },
  input: {
    width: '100%',
    border: '2px solid #62929E',
    borderRadius: 16,
    padding: '0 15px',
    color: '#62929E',
  }
}));

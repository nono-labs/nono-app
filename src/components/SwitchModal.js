import { Dialog, DialogContent, makeStyles, Box } from "@material-ui/core";
import TextBtn from "@/components/btn";

import React from "react";
const ComponentModal = (props) => {
  const { open, onClose, chainId, maxWidth, title } = props;
  const classes = useStyles(maxWidth);
  const goToRightNetwork = async () => {
    try{
      await window.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x1",
          },
        ],
      });
    }catch(e){

    }
   
  };
  return (
    <Dialog
      onClose={() => {}}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <Box className={classes.title}>
          Unsupported networks!
          <br />
          Please switch to Ethereum mainnet.
        </Box>
        <TextBtn
          width={200}
          widthM={180}
          onClick={goToRightNetwork}
          text={"Switch"}
        />
      </DialogContent>
    </Dialog>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    margin: "0 auto",
    "& .MuiDialogContent-root:first-child": {
      paddingTop: 15,
      [theme.breakpoints.up("sm")]: {
        paddingTop: 50,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiDialog-paperWidthSm": {
        maxWidth: (props) => 500,
        minWidth: (props) => 500,
      },
    },
  },
  paper: {
    margin: 0,
    width: "calc(100% - 30px)",
    borderRadius: 10,
  },
  DialogContent: {
    color: "#000",
    padding: "15px 15px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "50px 50px 50px",
    },
  },
  title: {
    fontSize: 18,
    lineHeight: "27px",
    textAlign: "center",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 30,
    },
  },
}));

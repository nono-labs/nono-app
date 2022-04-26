import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Images from "@/constant";
// import WalletConnectProvider from '@walletconnect/web3-provider'

const SwitchWallet = (props) => {
  const { open, setOpen } = props;
  // const [open, setOpen] = useState(true);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const connectWallet = (t) => {
    switch (t) {
      case "metamask":
        (async () => {
          try {
            let ethereum = window.ethereum;
            await ethereum.enable();
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
            const account = accounts[0];
            console.log(account, "account");
          } catch (e) {
            console.log(e, "e");
          }
        })();
        break;
        case "walletConnect":
        (async () => {
          if (localStorage.getItem('walletconnect')) {
            // const provider = new WalletConnectProvider({
            //   infuraId: 'f65c0bbb601041e19fb6a106560bc9ac',
            //   qrcode: true,
            //   rpc: {
            //     56: 'https://bsc-dataseed.binance.org/',
            //     97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            //   },
            // })
            // await provider.enable()
            // window.walletProvider = provider
            // const currentIndex = netArray.findIndex(
            //   (item) => Number(item.netWorkId) === Number(provider.chainId),
            // )
            // let params = { address: provider.accounts[0], chainType: NET_WORK_VERSION[provider.chainId] }
            // setCurrentNetIndex(currentIndex)
            // setAddress(provider.accounts[0])
            // dispatch(setProfileAddress(params))
            // dispatch(setProfileToken(params))
          }
        })();
        break;
      default:
        break;
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      classes={{ root: classes.Dialog }}
    >
      <DialogContent
        style={{ padding: "50px" }}
        classes={{ root: classes.DialogContent }}
      >
        <header>
          <Typography classes={{ root: classes.title }}>
            Connet Wallet
          </Typography>
          <CloseIcon
            onClick={handleClose}
            classes={{ root: classes.closeIcon }}
          />
        </header>
        <section className={classes.grow}>
          <section
            onClick={() => connectWallet("metamask")}
            className={classes.box}
          >
            <img src={Images.metamask} />
            <Typography classes={{ root: classes.boxSpan }}>
              metamask
            </Typography>
          </section>
          <section
            onClick={() => connectWallet("walletConnect")}
            className={classes.box}
          >
            <img src={Images.walletConnect} />
            <Typography classes={{ root: classes.boxSpan }}>
              walletConnect
            </Typography>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
};
export default SwitchWallet;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    // maxWidth: "500px",
    margin: "0 auto",
  },
  DialogContent: {
    fontFamily: "Archivo Black",
    color: "#000",
    "& header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "30px",
      fontFamily: "Archivo Black",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "24px",
      "& .title": {
        fontSize: "24px",
      },
    },
  },
  title: {
    fontSize: "24px",
  },
  closeIcon: {
    fontSize: "24px",
    color: "#000",
    cursor: "pointer",
  },
  grow: {
    display: "flex",
  },
  box: {
    width: "185px",
    height: "185px",
    border: "2px solid #000000",
    boxSizing: "border-box",
    borderRadius: "10px",
    marginRight: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    "&:last-child": {
      marginRight: 0,
    },
    "& img": {
      width: "90px",
      height: "90px",

      marginTop: "25px",
      marginBottom: "20px",
    },
  },
  boxSpan: {
    fontSize: "18px",
  },
}));

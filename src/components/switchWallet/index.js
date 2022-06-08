import Images from "@/constant";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import Modal from "@/components/modal";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "@/store/modules/account";
import { SUPPORTED_CHAINS, CHAIN_ID_NETWORK } from "@/utils/constant";
import { mainnet } from "@/utils/smart-contract/mainnet";
import WalletConnectProvider from '@walletconnect/web3-provider'

const SwitchWallet = (props) => {
  const { open, setOpen } = props;
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.account);
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
            handleClose();
            console.log('metamaskmetamask')
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
            const curChainId = await ethereum.request({ method: 'eth_chainId' })

            dispatch(setAddress({
              address: accounts[0],
              chainId: curChainId,
            }));
          } catch (e) {
            console.log(e, "e");
          }
        })();
        break;
      case "walletConnect":
        (async () => {
          try {
            handleClose();
            const provider = new WalletConnectProvider({
              infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',
              qrcode: true,
              rpc: {
                1: mainnet.config.rpcUrls[0],
              },
            })
            await provider.enable()
            window.walletProvider = provider
            dispatch(setAddress({
              address: provider.accounts[0],
              chainId: provider.chainId,
            }));

          } catch (e) {
            console.log(e, "e");
          }
        })();
        break;
      default:
        break;
    }
  };
  return (
    <Modal
      title="Connet Wallet"
      maxWidth={500}
      open={open}
      setOpen={handleClose}
    >
      <section className={classes.grow}>
        <section
          onClick={() => connectWallet("metamask")}
          className={classes.box}
        >
          <img src={Images.metamask} />
          <Typography classes={{ root: classes.boxSpan }}>Metamask</Typography>
        </section>
        <section
          onClick={() => connectWallet("walletConnect")}
          className={classes.box}
        >
          <img src={Images.walletConnect} />
          <Typography classes={{ root: classes.boxSpan }}>
            WalletConnect
          </Typography>
        </section>
      </section>
    </Modal>
  );
};
export default SwitchWallet;

const useStyles = makeStyles((theme) => ({
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

import Images from "@/constant";
import {
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React,{useMemo,useCallback,useState,useEffect} from "react";
// import WalletConnectProvider from '@walletconnect/web3-provider'
import Modal from "@/components/modal";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "@/store/modules/account";
import {  NET_WORK_VERSION } from '@/utils/constant'
const SwitchWallet = (props) => {
  const { open, setOpen } = props;
  const dispatch = useDispatch();
  const netArray = useMemo(
    () => [
      {
        name: "Ethereum Mainnet",
        // icon: selectEthSvg,
        shortName: ["ETH", "Ethereum"],
        // shortIcon: ethSvg,
        netWorkId: 1,
      },
    ],
    []
  );
  const { address } = useSelector(
    (state) => state.account
  );
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
            handleClose()
            await ethereum.enable();
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });

            const account = accounts[0];
            const currentIndex = netArray.findIndex(
              (item) => Number(item.netWorkId) === Number(ethereum.networkVersion || ethereum.chainId),
            )
            let params = {
              address: account,
              chainType: NET_WORK_VERSION[ethereum.networkVersion || ethereum.chainId],
              currentIndex,
            }

            dispatch(setAddress(params))
            console.log(account, "account");
          } catch (e) {
            console.log(e, "e");
          }
        })();
        break;
      case "walletConnect":
        (async () => {
          if (localStorage.getItem("walletconnect")) {
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

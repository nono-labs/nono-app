import TextBtn from "@/components/btn";
import Images from "@/constant";
import { routesList } from "@/router";
import { setAddress } from "@/store/modules/account";
import { SUPPORTED_CHAINS, NET_WORK_VERSION } from "@/utils/constant";
import { shortenAddress } from "@/utils/tools";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";
import cx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SwitchModal from "../SwitchModal";
import SwitchWallet from "../switchWallet";
import SearchBar from "./searchBar";
import Doc from "./doc";
import Web3 from "web3";
import { mainnet } from "@/utils/smart-contract/mainnet";
import WalletConnectProvider from '@walletconnect/web3-provider'

const SideBar = (props) => {
  const menuId = "primary-search-account-menu";
  const { address, chainType, currentIndex, chainId } = useSelector(
    (state) => state.account
  );
  console.log(chainId, 'chainId')
  const dispatch = useDispatch();
  const { location } = props;
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchShowingInMobile, setSearchShowing] = useState(false);
  const [open, setOpen] = useState(false);
  const [isShowSwitchModal, setIsShowSwitchModal] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    (async function () {
      const accounts = await window.ethereum?.request({ method: 'eth_accounts' });
      if (accounts?.length) injectWallet();
      if (window.walletProvider?.connected) {
        injectWalletConnect();
      } else {
        getWalletConnectFromStorage()
      }
    })();
  }, [window.ethereum, window.walletProvider, address]);
  const injectWalletConnect = useCallback(async () => {
    const provider = window.walletProvider
    dispatch(setAddress({
      address: provider.accounts[0],
      chainId: provider.chainId,
    }));
    provider.wc.on('accountsChanged', (accounts) => {
      dispatch(setAddress({
        address: accounts[0],
        chainId: provider.chainId,
      }));
    })
    provider.on('disconnect', (payload) => {
      localStorage.removeItem('walletconnect')
      window.walletProvider = undefined
      dispatch(setAddress({
        address: undefined,
        chainId: undefined,
      }));
    })
  }, [address])
  const getWalletConnectFromStorage = useCallback(async () => {
    if (localStorage.getItem('walletconnect')) {
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
    }
  }, [])
  useEffect(() => {
    setIsShowSwitchModal(false);
    console.log(address, chainId)
    if (address && (chainId !== '0x1' && chainId !== 1)) setIsShowSwitchModal(true);
  }, [address, chainId]);
  const injectWallet = useCallback(async () => {
    let ethereum = window.ethereum;
    if (ethereum) {
      console.log('injectWallet-injectWallet')
      const accounts = await ethereum?.request({
        method: "eth_requestAccounts",
      });
      const curChainId = await ethereum.request({ method: 'eth_chainId' })
      dispatch(setAddress({
        address: accounts[0],
        chainId: curChainId,
      }));

      // 监听节点切换
      ethereum.on("chainChanged", (_chainId) => {
        window.location.reload();
      });

      // 监听账号切换
      ethereum.on("accountsChanged", (accounts) => {
        dispatch(setAddress({
          address: accounts[0],
          chainId: curChainId,
        }));
      });
    }
  }, [address]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const goTo = (path) => {
    navigate(path);
  };
  const handleIsConnect = () => {
    setOpen(true);
  };
  const drawer = (
    <Box className={classes.barWidth}>
      <Box onClick={() => goTo("/")} className={classes.logo}>
        <Box className={classes.logoBox}>
          <img src={Images.logo} />
        </Box>
        <Typography className={classes.logoTitle}>Nonfungibles</Typography>
      </Box>
      <List>
        {routesList.map((routeObj, index) => (
          <NavLink className={classes.navLink} key={index} to={routeObj.path}>
            {({ isActive }) => {
              return (
                <ListItem
                  onClick={() => setMobileOpen(false)}
                  className={cx(
                    classes.menuList,
                    isActive && classes.menuListActive
                  )}
                >
                  {routeObj.logo}
                  <ListItemText primary={routeObj.pathName} />
                </ListItem>
              );
            }}
          </NavLink>
        ))}
      </List>
    </Box>
  );
  return (
    <div className={classes.mainPanel}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolBar }}>
          {isMobile && !isSearchShowingInMobile && (
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <img src={Images.menuIcon} />
              </IconButton>
              <IconButton
                aria-label="search"
                className={classes.searchIcon1}
                aria-controls={menuId}
                onClick={() => setSearchShowing(true)}
              >
                <SearchIcon
                  htmlColor={theme.custom.palette.noteBackground.default}
                />
              </IconButton>
            </Box>
          )}
          {isMobile ? (
            isSearchShowingInMobile && (
              <SearchContainer onSearchClose={() => setSearchShowing(false)} />
            )
          ) : (
            <SearchContainer onSearchClose={() => setSearchShowing(false)} />
          )}

          {!isSearchShowingInMobile && (
            <Link className={classes.logoCenter} to="/">
              <img src={Images.logo} />
            </Link>
          )}

          <Hidden xsDown>
            <Box className={classes.rightBox}>
              <TextBtn
                width={address && 200}
                className={classes.rightBoxBtn}
                startIcon={address && Images.asset}
                text={address ? shortenAddress(address) : "Connect"}
                onClick={() => {
                  !address && handleIsConnect();
                }}
              />
              <TextBtn startIcon={Images.eth} text="Ethereum" />
            </Box>
          </Hidden>
          <Hidden smUp>
            {isMobile && !isSearchShowingInMobile ? (
              <div className={classes.rightBoxMobile}>
                <div
                  onClick={() => {
                    !address && handleIsConnect();
                  }}
                  className={classes.rightIcon}
                >
                  <img src={address ? Images.asset : Images.unConnect} />
                </div>
                <div className={cx(classes.rightIcon, classes.rightIcon1)}>
                  <img src={Images.eth} />
                </div>
              </div>
            ) : null}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders" className={classes.nav}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div className={classes.toolbarBox} />
            {drawer}
            <Doc />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            style={{ border: 0 }}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            <Doc />
          </Drawer>
        </Hidden>
      </nav>
      <SwitchWallet open={open} setOpen={setOpen} />
      <SwitchModal
        open={isShowSwitchModal}
        networkName={"BSC"}
        onClose={() => {
          setIsShowSwitchModal(false);
        }}
      />
    </div>
  );
};
export default SideBar;
function SearchContainer({ onSearchClose }) {
  const classes = useStyles();
  return (
    <div className={classes.searchbarContainer}>
      <SearchBar onSearchClose={onSearchClose} />
    </div>
  );
}
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  mainPanel: {
    display: "flex",
  },
  appBar: {
    fontFamily: "ArchivoBlack",
    zIndex: 999,
    background: "#fff",
    color: "#000",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      zIndex: 88,
    },
  },
  toolBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  toolbarBox: theme.mixins.toolbar,

  menuButton: {
    marginRight: 3,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      alignItems: "flex-start",
      marginTop: 56,
      padding: "0 50px",
    },
  },
  logo: {
    margin: "50px 0 100px 0",
    display: "none",
    cursor: "pointer",

    "& span": {
      fontSize: "18px",
      marginTop: "5px",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  logoBox: {
    width: "24px",
    height: "24px",
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: 12,
    },
  },
  logoTitle: {
    fontFamily: "BarlowBlack",
    fontSize: "18px",
    marginTop: 5,
  },
  logoCenter: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    "& img": {
      width: "32px",
      height: "32px",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navLink: {
    textDecoration: "none",
  },
  searchIcon1: {
    padding: 2,
    borderRadius: 10,
    border: "2px solid #000",
  },
  menuList: {
    height: "40px",
    // width: '150px',
    width: "100%",
    border: 0,
    cursor: "pointer",
    marginBottom: "50px",
    borderRadius: "10px",
    color: "#fff",
    "& img": {
      width: "18px",
      height: "18px",
    },
    "& span": {
      fontFamily: "ArchivoBlack",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      marginLeft: "10px",
    },
  },
  menuListActive: {
    background: "#fff",
    color: "#000",
  },
  searchbarContainer: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      width: "500px",
    },
  },
  rightBox: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "auto",
    },
  },
  rightBoxBtn: {
    margin: "0 20px",
    [theme.breakpoints.down("md")]: {
      margin: "0 10px",
    },
  },
  rightBoxMobile: {
    display: "flex",
    alignItems: "center",
    "& .rightIcon:first-child": {
      background: "#000",
      marginRight: "15px",
    },
  },
  rightIcon: {
    width: "32px",
    height: "32px",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #000000",
    cursor: "pointer",
    background: "#000",
    marginRight: "15px",
  },
  rightIcon1: {
    background: "#fff",
    marginRight: "0",
  },
  barWidth: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0 25px",
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  nav: {
    position: "relative",
  },
}));

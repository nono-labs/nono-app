import TextBtn from "@/components/btn";
import Images from "@/constant";
import { routesList } from "@/router";
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
import {
  Menu as MenuIcon,
  SearchOutlined as SearchIcon,
} from "@material-ui/icons";
import cx from "clsx";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SwitchWallet from "../switchWallet";
import SearchBar from "./searchBar";

const SideBar = (props) => {
  const menuId = "primary-search-account-menu";

  const { window, location } = props;
  const { pathname, state } = useLocation();
  const theme = useTheme();

  const classes = useStyles();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchShowingInMobile, setSearchShowing] = useState(false);
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const goTo = (path) => {
    navigate(path);
  };
  const handleIsConnect = () => {
    setOpen(true);
  };
  console.log(routesList, "pathname");
  const drawer = (
    <Box className={classes.barWidth}>
      <Box onClick={() => goTo("/")} className={classes.logo}>
        <img src={Images.logo} />
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon htmlColor={theme.custom.palette.noteBackground.default} />
          </IconButton>
          {!isSearchShowingInMobile && (
            <img className={classes.logoCenter} src={Images.logo} />
          )}
          {isMobile ? (
            isSearchShowingInMobile && (
              <SearchContainer onSearchClose={() => setSearchShowing(false)} />
            )
          ) : (
            <SearchContainer onSearchClose={() => setSearchShowing(false)} />
          )}
          <Hidden xsDown>
            <Box className={classes.rightBox}>
              <TextBtn
                className={classes.rightBoxBtn}
                startIcon={connect && Images.asset}
                text="Connect"
                onClick={handleIsConnect}
              />
              <TextBtn startIcon={Images.eth} text="Ethereum" />
            </Box>
          </Hidden>
          <Hidden smUp>
            {isMobile && !isSearchShowingInMobile ? (
              <div className={classes.rightBoxMobile}>
                <IconButton
                  aria-label="search"
                  className={classes.searchIcon}
                  aria-controls={menuId}
                  onClick={() => setSearchShowing(true)}
                >
                  <SearchIcon
                    htmlColor={theme.custom.palette.noteBackground.default}
                  />
                </IconButton>
                <div className={classes.rightIcon}>
                  <img src={Images.asset} />
                </div>
                <div className={cx(classes.rightIcon, classes.rightIcon1)}>
                  <img src={Images.eth} />
                </div>
              </div>
            ) : null}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
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
          </Drawer>
        </Hidden>
      </nav>
      <SwitchWallet open={open} setOpen={setOpen} />
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
    marginRight: theme.spacing(2),
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
    "& img": {
      width: "24px",
      height: "24px",
      marginRight: "10px",
    },
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
  logoTitle: {
    fontFamily: "BarlowBlack",
    fontSize: "18px",
    marginTop: 5,
  },
  logoCenter: {
    position: "absolute",
    left: "50%",
    width: "45px",
    transform: "translateX(-50%)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navLink: {
    textDecoration: "none",
  },
  searchIcon: {
    background: "#e5e5e5",
    width: "28px",
    height: "28px",
    marginRight: 17,
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
      marginLeft: "26px",
    },
  },
  rightBox: {
    display: "flex",
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
      marginRight: "17px",
    },
  },
  rightIcon: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #000000",
    cursor: "pointer",
    background: "#000",
    marginRight: "17px",
  },
  rightIcon1: {
    background: "#fff",
    marginRight: "0",
  },
  barWidth: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0 25px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

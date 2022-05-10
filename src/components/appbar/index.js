import React, { useState } from 'react';
import cx from 'clsx';
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { CssBaseline, makeStyles, useTheme, Drawer, Hidden, AppBar, List, ListItemText, Toolbar, useMediaQuery, ListItem, IconButton, Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/SearchOutlined';
import {
    SearchOutlined as SearchIcon,
    Menu as MenuIcon
  } from "@material-ui/icons";
import { routesList } from '@/router'
import Images from '@/constant'
import SearchBar from './searchBar';
import SwitchWallet from '../switchWallet';
import TextBtn from '@/components/btn';

const SideBar = props => {
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
        setMobileOpen(!mobileOpen)
    }
    const goTo = (path) => {
        navigate(path);
    };
    const handleIsConnect = () => {
        setOpen(true)
    }
    console.log(routesList, 'pathname')
    const drawer = (
        <div>
            <div onClick={() => goTo('/')} className={classes.logo}>
                <img src={Images.logo} />
                <Typography className={classes.logoTitle}>Nonfungibles</Typography>
            </div>
            <List>
                {routesList.map((routeObj, index) => (
                    <NavLink className={classes.navLink} key={index} to={routeObj.path}>
                        {({ isActive }) => (
                            <ListItem onClick={()=>setMobileOpen(false)} className={cx(classes.menuList, isActive && classes.menuListActive)}>
                                {/* <img src={routeObj.logo} /> */}
                                {routeObj.logo}
                                <ListItemText primary={routeObj.pathName} />
                            </ListItem>
                        )}
                    </NavLink>

                ))}
            </List>

        </div>
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
                    {!isSearchShowingInMobile && <img className={classes.logoCenter} src={Images.logo} />}
                    {isMobile ? (
                        isSearchShowingInMobile &&
                        <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                    ) : (
                        <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                    )}
                    <Hidden xsDown implementation="css">
                        <div className={classes.rightBox}>
                            <TextBtn style={{marginRight: '20px'}} startIcon={connect && Images.asset} text='Connect'  onClick={handleIsConnect}  />
                            <TextBtn startIcon={Images.eth} text='Ethereum'  />

                        </div>
                    </Hidden>
                    <Hidden smUp implementation="css">
                        {isMobile && !isSearchShowingInMobile ? (
                            <div className={classes.rightBoxMobile}>
                                <IconButton
                                    aria-label="search"
                                    className={classes.searchIcon}
                                    aria-controls={menuId}
                                    onClick={() => setSearchShowing(true)}
                                >
                                    <SearchIcon htmlColor={theme.custom.palette.noteBackground.default} />
                                </IconButton>
                                <div className={classes.rightIcon}><img src={Images.asset} /></div>
                                <div className={cx(classes.rightIcon, classes.rightIcon1)}><img src={Images.eth} /></div>
                            </div>
                        ) : null}

                    </Hidden>
                </Toolbar>
            </AppBar>
            <nav aria-label='mailbox folders'>
                <Hidden  smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={'left'}
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
                    <Drawer style={{ border: 0,}} classes={{
                        paper: classes.drawerPaper,
                    }} variant="permanent" open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <SwitchWallet open={open} setOpen={setOpen} />
        </div>
    )
}
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
        display: 'flex',
    },
    appBar: {
        fontFamily: 'ArchivoBlack',
        zIndex: 999,
        background: '#fff',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            zIndex: 88,
        },
    },
    toolBar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
    },
    toolbarBox: theme.mixins.toolbar,

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#000000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            alignItems: 'flex-start',
            paddingLeft: '30px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px'
        },
    },
    logo: {
        margin: '50px 0 100px 0',
        display: 'none',
        cursor: 'pointer',
        '& img': {
            width: '24px',
            height: '24px',
            marginRight: '10px'
        },
        '& span': {
            fontSize: '18px',
            marginTop: '5px',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    logoTitle: {
        fontFamily: 'BarlowBlack',
        fontSize: '18px',
    },
    logoCenter: {
        position: 'absolute',
        left: '50%',
        width: '45px',
        transform: 'translateX(-50%)',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    navLink: {
        textDecoration: 'none',
    },
    searchIcon: {
        background: '#e5e5e5',
        width: '28px',
        height: '28px',
        marginRight: 17,
    },
    menuList: {
        height: '40px',
        width: '150px',
        cursor: 'pointer',
        marginBottom: '50px',
        borderRadius: '10px',
        color: '#fff',
        '& img': {
            width: '18px',
            height: '18px',
        },
        '& span': {
            fontFamily: 'ArchivoBlack',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            marginLeft: '10px',

        }
    },
    menuListActive: {
        background: '#fff',
        color: '#000',
    },
    searchbarContainer: {
        flexGrow: 1,
        [theme.breakpoints.up("md")]: {
            flexGrow: 0,
            width: '500px',
            marginLeft: '26px'
        }
    },
    rightBox: {
        display: 'flex',
    },

    rightBoxMobile: {
        display: 'flex',
        alignItems: 'center',
        '& .rightIcon:first-child': {
            background: '#000',
            marginRight: '17px'
        }
    },
    rightIcon: {
        width: '26px',
        height: '26px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px solid #000000',
        cursor: 'pointer',
        background: '#000',
        marginRight: '17px'
    },
    rightIcon1: {
        background: '#fff',
        marginRight: '0'
    }
}))
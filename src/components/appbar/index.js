import React, { useState } from 'react';
import cx from 'clsx';
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { CssBaseline, makeStyles, useTheme, Drawer, Hidden, AppBar, List, ListItemText, Toolbar, useMediaQuery, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import {routesList} from '@/router'
import ListItem from '@material-ui/core/ListItem';
import Images from '@/constant'
import SearchBar from './searchBar';
import SwitchWallet from '../switchWallet';

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
                <span>Nonfungibles</span>
            </div>
            <List>
                {routesList.map((routeObj, index) => (
                    <NavLink className={classes.navLink} key={index} to={routeObj.path}>
                        {({ isActive }) => (
                            <ListItem className={cx(classes.menuList, isActive && classes.menuListActive)}>
                                <img src={routeObj.logo} />
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
                    {isMobile ? (
                        isSearchShowingInMobile &&
                        <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                    ) : (
                        <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                    )}
                    <Hidden xsDown implementation="css">
                        <div className={classes.rightBox}>
                            <Button onClick={handleIsConnect} textAllCaps={false} disableRipple={true} startIcon={connect && <img src={Images.asset} />} classes={{ root: classes.buttonAsset }}>Connect</Button>
                            <Button disableRipple={true} startIcon={<img src={Images.eth} />}>Ethereum</Button>
                        </div>
                    </Hidden>
                    <Hidden smUp implementation="css">
                        {isMobile && !isSearchShowingInMobile ? (
                            <div className={classes.rightBoxMobile}>
                                <IconButton
                                    aria-label="search"
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
                <Hidden smUp implementation="css">
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
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer style={{ border: 0 }} classes={{
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
        ...theme.custom.fontFamily.archivo,

        zIndex: 9999,
        background: '#fff',
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        // boxShadow: 'none',
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

    },
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
        alignItems: 'center'
    },
    logo: {
        margin: '50px 0 100px 0',
        display: 'flex',
        cursor: 'pointer',
        '& img': {
            width: '24px',
            height: '24px',
            marginRight: '10px'
        },
        '& span': {
            fontFamily: 'Barlow',
            fontWeight: 900,
            fontSize: '18px',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    navLink: {
        textDecoration: 'none',
    },
    menuList: {
        height: '40px',
        width: '150px',
        cursor: 'pointer',
        marginTop: '50px',
        borderRadius: '10px',
        color: '#fff',
        '& img': {
            width: '18px',
            height: '18px',
            marginRight: '10px',
        },
        '& a': {
            ...theme.custom.fontFamily.archivo,
            background: 'red',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            color: '#fff',
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
    buttonAsset: {
        background: '#000',
        color: '#fff',
        marginRight: '30px',
        '&:hover': {
            background: '#000',
        }
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
/* global BigInt */
import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import {
  Image as ImageIcon,
  Share as ShareIcon,
  Cached as CachedIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";
import Btn from "@/components/btn";
import Images from "@/constant";
// import OfferForm from './OfferForm';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import clsx from "clsx";
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
// const api = extjs.connect("https://boundary.ic0.app/");

const shorten = (a) => {
  return a.substring(0, 12) + "...";
};

const Detail = (props) => {
  let { tokenid } = useParams();
  //   let { index, canister} = extjs.decodeTokenId(tokenid);
  const navigate = useNavigate();
  const [floor, setFloor] = React.useState("");
  const [listing, setListing] = React.useState(false);
  const [transactions, setTransactions] = React.useState(false);
  const [owner, setOwner] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
  const [openOfferForm, setOpenOfferForm] = React.useState(false);
  const classes = useStyles();

  const cancelListing = () => {
    props.list(tokenid, 0, props.loader, _afterList);
  };
  const _refresh = async () => {
    await fetch(
      "https://us-central1-entrepot-api.cloudfunctions.net/api/token/" + tokenid
    )
      .then((r) => r.json())
      .then((r) => {
        setListing({
          price: BigInt(r.price),
          time: r.time,
        });
        setOwner(r.owner);
        setTransactions(r.transactions);
      });
  };
  const _afterList = async () => {
    await _refresh();
  };

  const displayImage = (tokenid) => {
    return <img src={Images.nft} alt="" className={classes.nftImage} />;
  };

  return (
    <Box className={classes.container}>
      <Box className={clsx(classes.contennt, classes.imgMain)}>
        {displayImage(tokenid)}
      </Box>
      <Box className={classes.contennt}>
        <Box className={classes.header}>
          <Grid className={classes.titleBox} container>
            <Typography className={classes.Archivo900}>Meebit #9110</Typography>
            <Grid
              lg={"auto"}
              alignItems={"center"}
              container
              className={classes.extends}
            >
              <FavoriteBorderIcon htmlColor="#62929E" />
              <span>1.3K</span>
              <Divider
                className={classes.borderLine}
                orientation="vertical"
                flexItem
              />
              <ShareIcon htmlColor="#62929E" />
              <Divider
                className={classes.borderLine}
                orientation="vertical"
                flexItem
              />
              <CachedIcon htmlColor="#62929E" />
            </Grid>
          </Grid>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary={<a>123412</a>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          </List>
        </Box>
        {/* content */}
        <Box className={classes.header}>
          <Typography component="div">
            <Box fontSize={18} mb={"10px"} textAlign="justify">
              About
            </Box>
            <Box className={classes.barlow400} mb={"20px"} textAlign="justify">
              Meebit #9110 The Meebits are 20,000 unique 3D voxel characters,
              created by a custom generative algorithm, then registered on the
              Ethereum blockchain. The NFT contract the governs ownership is a
              standard ERC-721 that works with any compatible service or
              exchange. Also inc luded in the contract is a custom marketplace
              that supports like-kind trading of up to 100 Meebits per
              transaction, along with all the standard buy, bid and ask
              transactions.
            </Box>
            <Box fontSize={18} mb={"10px"} textAlign="justify">
              Properties
            </Box>
            <Box className={classes.chipBox}>
              <Chip label="Hair Color: Dark" variant="outlined" />
              <Chip label="Pants Color: Denim " variant="outlined" />
              <Chip label="Shirt Color: Black" variant="outlined" />
              <Chip label="Type: Human " variant="outlined" />
              <Chip label="Shoes Color: Grey" variant="outlined" />
              <Chip label="Basic" variant="outlined" />
              <Chip label="Basic" variant="outlined" />
              <Chip label="Basic" variant="outlined" />
              <Chip label="Basic" variant="outlined" />
            </Box>
            <Box fontSize={18} mt={"10px"} mb={"10px"} textAlign="justify">
              Contract Details
            </Box>
            <Grid className={classes.contractDetail} container>
              <Grid item xs={3}>
                <Box>Blockchain</Box>
                <Box className={classes.barlow400}>Ethereum</Box>
              </Grid>
              <Grid item xs={3}>
                <Box>Token Standard</Box>
                <Box className={classes.barlow400}>ERC-721</Box>
              </Grid>
              <Grid item xs={3}>
                <Box>Contract Address</Box>
                <Box className={classes.barlowA}>
                  <a>0xsa383...c95503</a>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>Token Id</Box>
                <Box className={classes.barlow400}>9110</Box>
              </Grid>
            </Grid>
          </Typography>
        </Box>
        <Box component="div" className={classes.header}>
          <Typography component="div">
            <Grid
              container
              alignItems="flex-end"
              justifyContent="space-between"
              className={classes.listPriceBox}
            >
              <Box>
                <Box fontSize={18} mb={"10px"} textAlign="justify">
                  List Price
                </Box>
                <Grid alignItems="center" container>
                  <Box className={classes.imgBox}>
                    <img src={Images.eth} />
                  </Box>
                  <Typography className={classes.price}>0.67</Typography>
                  <Box>
                    <Typography className={classes.priceDetail}>
                      ($654.32)
                    </Typography>
                    <Typography className={classes.priceDetail}>
                      Expires in 16d 22h 10m
                    </Typography>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Btn text="Activities" />
              </Box>
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              justifyContent="space-between"
              className={classes.listPriceBox}

            >
              <Box mt={"30px"}>
                <Box fontSize={18} mb={"10px"} textAlign="justify">
                  Best Offer
                </Box>
                <Grid alignItems="center" container>
                  <Box className={classes.imgBox}>
                    <img src={Images.weth} />
                  </Box>
                  <Typography className={classes.price}>0.67</Typography>
                  <Box>
                    <Typography className={classes.priceDetail}>
                      ($654.32)
                    </Typography>
                    <Typography className={classes.priceDetail}>
                      Expires in 16d 22h 10m
                    </Typography>
                  </Box>
                </Grid>
              </Box>
              <Box> 
                <Btn text="Activities" />
              </Box>
            </Grid>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Detail;

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#ffffff",
    marginLeft: "10px",
    color: "#2B74DC",
    fontWeight: "bold",
    boxShadow: "none",
    border: "1px solid #2B74DC",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "10px",
    },
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  typo: {
    fontWeight: "bold",
    padding: "20px 0px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  personal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contennt: {
    width: "calc(50% - 25px)",
    borderRadius: "10px",
    marginRight: "50px",
    [theme.breakpoints.down("md")]: {
      width: "calc(50% - 10px)",
      marginRight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
      "&:first-child": {
        marginBottom: "10px",
      },
    },
    "&:first-child": {
      background: "#fff",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  imgMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "100%",
      maxHeight: "100%",
    },
  },
  nftImage: {},
  iconsBorder: {
    border: "1px solid #E9ECEE",
    borderRadius: "5px",
  },
  div: {
    display: "flex",
    padding: "10px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderBottom: "1px solid #E9ECEE",
    borderRadius: "5px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: "bold",
    marginLeft: 20,
  },
  header: {
    width: "100%",
    background: "#fff",
    borderRadius: "20px",
    padding: "30px 50px",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px",
      marginTop: "15px",
    },
    "&:first-child": {
      marginTop: "0px",
    },
  },
  contractDetail: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      "& .MuiGrid-grid-xs-3": {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%",
      },
    },
  },
  titleBox: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  extends: {
    height: "36px",
    width: "auto",
    border: "2px solid #62929E",
    borderRadius: "50px",
    marginLeft: "50px",
    overflow: "hidden",
    boxSizing: "border-box",
    "& svg": {
      margin: "0 6px",
    },
    "& span": {
      fontSize: "18px",
      lineHeight: "32px",
      color: "#62929E",
      marginRight: "6px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      height: "32px",
      "& span": {
        lineHeight: "28px",
        color: "#62929E",
        marginRight: "6px",
      },
    },
  },
  borderLine: {
    background: "#62929E",
    width: "2px",
  },
  root: {
    display: "flex",
    padding: "0",
    marginTop: "20px",
    "& .MuiListItem-gutters": {
      padding: "0",
      fontSize: 18,
      lineHeight: "27px",
    },
    "& .MuiListItemText-secondary": {
      fontStyle: "italic",
      color: "#62929E",
      fontSize: 18,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      fontSize: 16,

      "& .MuiListItemText-multiline": {
        margin: 0,
      },
      "& .MuiListItem-gutters": {
        fontSize: 16,
        lineHeight: "24px",
      },
      "& .MuiListItemText-secondary": {
        fontSize: 16,
        lineHeight: "24px",
      },
      "& .MuiListItemAvatar-root": {
        minWidth: 0,
        marginRight: 5,
      },
      "& .MuiAvatar-root": {
        width: "25px",
        height: "25px",
        objectFit: "cover",
      },
    },
  },
  title: {
    fontSize: 18,
  },
  chipBox: {
    "& .MuiChip-root": {
      border: "2px solid #62929E",
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "27px",
      color: "#62929E",
      marginRight: "10px",
      marginBottom: "10px",
    },
  },
  Archivo900: {
    fontFamily: "ArchivoBlack",
    fontSize: "36px",
    lineHeight: "36px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "24px",
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "18px",
      marginBottom: "10px",
    },
  },
  barlow400: {
    fontFamily: "BarlowRegular",
  },
  barlowA: {
    fontStyle: "italic",
    color: "#62929E",
    fontSize: 18,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  imgBox: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    "& img": {
      height: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
      "& img": {
        height: "24px",
      },
    },
  },
  price: {
    fontSize: 36,
    lineHeight: "40px",
    marginRight: "15px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
      fontSize: 24,
      lineHeight: "24px",
    },
  },
  priceDetail: {
    fontFamily: "none",
    fontSize: 14,
    lineHeight: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      lineHeight: "12px",
    },
  },
  listPriceBox: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
  }
}));

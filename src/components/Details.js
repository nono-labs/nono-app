/* global BigInt */
import TextBtn from "@/components/btn";
import Images from "@/constant";
import {
  Box,
  Chip,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Cached as CachedIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActivitiesModal from "./detailModal/activity";
import MakeOfferModal from "./detailModal/makeOffer";
import ManageListModal from "./detailModal/manageList";
import OffersModal from "./detailModal/offer";

const Detail = (props) => {
  let { tokenid } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = useState();
  const classes = useStyles();
  const [visible, setVisible] = useState({
    activities: false,
    offers: false,
    buy: false,
    manageList: false,
  });

  const handleOpen = (index, type = "buy") => {
    setVisible({
      ...visible,
      [type]: true,
    });
    setCurrent(index);
  };

  const displayImage = (tokenid) => {
    return <img src={Images.nft} alt="" className={classes.nftImage} />;
  };

  return (
    <Box className={classes.container}>
      <Box className={clsx(classes.itemBox, classes.imgMain)}>
        {displayImage(tokenid)}
      </Box>
      <Box className={classes.itemBox}>
        <Box className={classes.header}>
          <Box className={classes.titleBox}>
            <Typography className={classes.Archivo900}>Meebit #9110</Typography>
            <Box className={classes.actionBox}>
              <Box className={classes.actionLike}>
                <FavoriteBorderIcon htmlColor="#62929E" />
                <Typography>1.3K</Typography>
              </Box>
              <Divider
                className={classes.borderLine}
                orientation="vertical"
                flexItem
              />
              <Box className={classes.actionLike}>
                <ShareIcon htmlColor="#62929E" />
              </Box>
              <Divider
                className={classes.borderLine}
                orientation="vertical"
                flexItem
              />
              <Box className={classes.actionLike}>
                <CachedIcon htmlColor="#62929E" />
              </Box>
            </Box>
          </Box>
          <Grid container>
            <Grid item sm={6}>
              <Box className={classes.grid}>
                <img className={classes.avatarImg} src={Images.avatar} />
                <Box className={classes.avatarText}>
                  <Typography className={classes.textFont}>
                    Collection
                  </Typography>
                  <a  className={classes.textFont}>Meebit</a>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className={classes.grid}>
                <img className={classes.avatarImg} src={Images.avatar} />
                <Box className={classes.avatarText}>
                  <Typography className={classes.textFont}>Owner</Typography>
                  <a onClick={() => navigate("/profile")} className={classes.textFont}>Alex Sanders</a>
                </Box>
              </Box>
            </Grid>
          </Grid>
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
                <TextBtn
                  onClick={() =>
                    setVisible({
                      ...visible,
                      manageList: true,
                    })
                  }
                  style={{ marginRight: 10, marginBottom: 10 }}
                  text="Manage"
                />
                <TextBtn
                  bg={1}
                  onClick={() => handleOpen(0)}
                  style={{ marginRight: 10, marginBottom: 10 }}
                  text="Buy Now"
                />
                <TextBtn
                  style={{ marginRight: 10, marginBottom: 10 }}
                  bg={0}
                  onClick={() =>
                    setVisible({
                      ...visible,
                      activities: true,
                    })
                  }
                  text="Activities"
                />
              </Box>
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              justifyContent="space-between"
              className={classes.listPriceBox}
            >
              <Box className={classes.spacing}>
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
                <TextBtn
                  style={{ marginRight: 10, marginBottom: 10 }}
                  onClick={() => handleOpen(1)}
                  text="Make Offer"
                />
                <TextBtn
                style={{ marginRight: 10, marginBottom: 10 }}
                  onClick={() =>
                    setVisible({
                      ...visible,
                      offers: true,
                    })
                  }
                  bg={0}
                  text="Offers"
                />
              </Box>
            </Grid>
          </Typography>
        </Box>
      </Box>
      <ActivitiesModal
        open={visible.activities}
        setOpen={() =>
          setVisible({
            ...visible,
            activities: false,
          })
        }
      />
      <OffersModal
        open={visible.offers}
        setOpen={() =>
          setVisible({
            ...visible,
            offers: false,
          })
        }
      />
      <MakeOfferModal
        open={visible.buy}
        current={current}
        setOpen={() =>
          setVisible({
            ...visible,
            buy: false,
          })
        }
      />
      <ManageListModal
        open={visible.manageList}
        current={current}
        setOpen={() =>
          setVisible({
            ...visible,
            manageList: false,
          })
        }
      />
    </Box>
  );
};
export default Detail;

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: 30,
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  grid: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  itemBox: {
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
  header: {
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
  actionBox: {
    display: "flex",
    alignItems: "center",
    height: "36px",
    border: "2px solid #62929E",
    borderRadius: "50px",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
    [theme.breakpoints.down("sm")]: {
      height: 32,
      width: "100%",
    },
  },
  actionLike: {
    display: "flex",
    alignItems: "center",
    padding: "0 7px",
    fontSize: 18,
    color: "#62929E",
    "& p": {
      marginLeft: 5,
    },
    [theme.breakpoints.down("sm")]: {
      width: "33%",
      justifyContent: "center",
    },
  },
  contractDetail: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      "& .MuiGrid-grid-xs-3": {
        maxWidth: "50%",
        flexBasis: "50%",
      },
    },
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
    display: "flex",
    marginBottom: 23,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  Archivo900: {
    fontFamily: "ArchivoBlack",
    fontSize: 36,
    lineHeight: "36px",
    paddingRight: 50,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 18,
      lineHeight: "18px",
    },
  },
  borderLine: {
    background: "#62929E",
    width: "2px",
  },
  avatarImg: {
    width: 33,
    marginRight: 16,
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
  },
  avatarText: {
    fontSize: 18,
    lineHeight: "27px",
    "& a": {
      color: "#62929E",
      fontStyle: "italic",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  title: {
    fontSize: 18,
  },
  chipBox: {
    "& .MuiChip-root": {
      border: "2px solid #62929E",
      fontSize: "14px",
      lineHeight: "27px",
      color: "#62929E",
      marginRight: "10px",
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
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  textFont: {
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "16px",
    },
  },
}));

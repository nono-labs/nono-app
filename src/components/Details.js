/* global BigInt */
import React, { useState } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  IconButton,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons//Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RefreshIcon from "@material-ui/icons/Refresh";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShopIcon from "@material-ui/icons/Shop";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import ListIcon from '@material-ui/icons/List';
import AcUnitIcon from "@material-ui/icons/AcUnit";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DetailsIcon from "@material-ui/icons/Details";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Images from '@/constant'
import Alert from '@material-ui/lab/Alert';
// import OfferForm from './OfferForm';
import { useNavigate } from "react-router-dom";
import {
  useParams
} from "react-router-dom";
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

const shorten = a => {
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
    await fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/token/"+tokenid).then(r => r.json()).then(r => {
      setListing({
        price : BigInt(r.price),
        time : r.time,
      });
      setOwner(r.owner);
      setTransactions(r.transactions);
    });
  }
  const _afterList = async () => {
    await _refresh();
  };
  const _afterBuy = async () => {
    await _refresh();
  }
  const closeOfferForm = () => {
    setOpenOfferForm(false);
  };
  const getFloorDelta = amount => {
    if (!floor) return "-";
    var fe = (floor*100000000);
    var ne = Number(amount);
    if (ne > fe){
      return (((ne-fe)/ne)*100).toFixed(2)+"% above";
    } else if (ne < fe) {      
      return ((1-(ne/fe))*100).toFixed(2)+"% below";
    } else return "-"
  };
  const makeOffer = async () => {
    setOpenOfferForm(true);
  };
  
  
  const cancelOffer = async () => {
    // props.loader(true, "Cancelling offer...");
    // props.loader(false);
    // props.alert(
    //   "Offer cancelled",
    //   "Your offer was cancelled successfully!"
    // );
  };
  
  const displayImage = tokenid => {
        return (
          <img
            src={Images.nft}
            alt=""
            className={classes.nftImage}
            style={{
              border:"none",
              maxWidth:700,
              maxHeight:"100%",
              cursor: "pointer",
              height: "100%",
              width: "100%",
              marginLeft:"auto",
              marginRight:"auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        )
  };

  return (
      <div className={classes.container}>
        <div className={classes.contennt}>

        {displayImage(tokenid)}
        </div>
        <div className={classes.contennt}>
        4124124
        </div>
      </div>
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
      display: 'flex',
    // padding: "20px 120px 120px",
    // [theme.breakpoints.down("md")]: {
    //   padding: "110px 66px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "5px 5px",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   padding: "5px 5px",
    // },
  },
  contennt: {
    width: 'calc(50% - 20px)',
    height: '900px',
    marginRight: '50px',
    '&:first-child': {
        background: '#fff'
    },
    '&:last-child': {
        marginRight: 0
    },
  },
  nftImage: {
    // [theme.breakpoints.up("md")]: {
    //   minHeight:600,
    // },
    // [theme.breakpoints.down("sm")]: {
    // },
    // [theme.breakpoints.down("xs")]: {
    // },
  },
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
    marginLeft : 20
  },
}));


import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  makeStyles,
  Typography,
  InputBase,
  Chip,
  Box,
  ClickAwayListener,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Paper,
  Grid,
  Hidden,
} from "@material-ui/core";
import Images from "@/constant";
import { useTheme } from "@material-ui/styles";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import TextBtn from "@/components/btn";
import Select from "@/components/select";

const ComponentModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [sort, setSort] = useState(10);

  // const [open, setOpen] = useState(true);
  const classes = useStyles();
  function createData(Activity, calories, fat, carbs, protein) {
    return { Activity, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Mint", "-", "0xsa383...", "0xsa383...", "3 days ago"),
  ];

  const handleChange = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleOk = () => {
    console.log();
  };
  return (
    <Dialog onClose={setOpen} open={open} classes={{ root: classes.Dialog, paper: classes.paper }}>
      <DialogContent classes={{ root: classes.DialogContent }}>
        
        <header>
          <Typography classes={{ root: classes.title }}>
            Manage Listing
          </Typography>
          <CloseIcon onClick={setOpen} classes={{ root: classes.closeIcon }} />
        </header>
        <Grid container flexWrap='nowrap' justifyContent="center">
          <Box className={classes.listBox}>
            <img src={Images.edit} />
            Lower Price
          </Box>
          <Box className={classes.listBox}>
            <img src={Images.cancel} />
            Cancel Listing
          </Box>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    margin: "0 auto",

    "& .MuiDialogContent-root:first-child": {
      paddingTop: 0,
    },
    [theme.breakpoints.up("sm")]: {
      "& .MuiDialog-paperWidthSm": {
        maxWidth: 500,
        minWidth: 500,
      },
    },
  },
  paper: {
    maxWidth: "500px",
    margin: 0,
    width: "calc(100% - 30px)",
  },
  DialogContent: {
    color: "#000",
    padding: "0 15px 15px",
    "& header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 15,
      position: "sticky",
      top: 0,
      left: 0,
      background: "#fff",
      paddingTop: 15,
      zIndex: 99,
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 50px 50px",
      "& header": {
        paddingTop: 50,
        paddingBottom: 30,
      },
    },
  },
  title: {
    fontFamily: "ArchivoBlack",
    fontSize: 20,
    lineHeight: "24px",
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
  },
  closeIcon: {
    fontSize: "30px",
    cursor: "pointer",
  },
  listBox: {
    width: 185,
    height: 185,
    border: "2px solid #000000",
    cursor: "pointer",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    fontSize: 18,
    '&:last-child': {marginRight: 0},
    "& img": {
      with: 90,
      marginBottom: 19,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 150,
      height: 150,
      "& img": {
        width: 64,
        marginBottom: 15,
      },
    },
  },
}));

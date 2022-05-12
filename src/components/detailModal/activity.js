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
    <Dialog
      onClose={setOpen}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <header>
          <Typography classes={{ root: classes.title }}>Activity</Typography>
          <CloseIcon onClick={setOpen} classes={{ root: classes.closeIcon }} />
        </header>
        <Hidden xsDown implementation="css">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Activity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={row.Activity + i}>
                  <TableCell
                    className={classes.activity}
                    component="th"
                    scope="row"
                  >
                    {row.Activity}
                  </TableCell>
                  <TableCell>
                    <Grid container className={classes.price}>
                      <img src={Images.eth} />
                      {row.calories}
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <a>{row.fat}</a>
                  </TableCell>
                  <TableCell>
                    <a>{row.carbs}</a>
                  </TableCell>
                  <TableCell>
                    <Grid container>
                      <a>{row.protein}</a>
                      <img style={{ marginLeft: 5 }} src={Images.link} />
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Hidden>
        <Hidden smUp implementation="css">
          {rows.map((row, i) => (
            <Box key={i} className={classes.listBox}>
              <Grid container>
                <Grid alignItems="center" container item xs={4}>
                  <Typography className={classes.label}>Type</Typography>
                  <Typography>Sale</Typography>
                </Grid>
                <Grid alignItems="center" container item xs={4}>
                  <Typography className={classes.label}>Price</Typography>
                  <Box className={classes.price}>
                    <img src={Images.eth} />
                    0.59
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid alignItems="center" container item xs={4}>
                  <Typography className={classes.label}>From</Typography>
                  <Typography className={classes.address}>
                    0xc4c16...
                  </Typography>
                </Grid>
                <Grid alignItems="center" container item xs={4}>
                  <Typography className={classes.label}>To</Typography>
                  <Typography className={classes.address}>
                    0xc4c16...
                  </Typography>
                </Grid>
                <Grid alignItems="center" container item xs={4}>
                  <Typography className={classes.label}>Time</Typography>
                  <Typography className={classes.address}>
                    2 days ago
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Hidden>
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
        maxWidth: 700,
        minWidth: 700,
      },
    },
  },
  paper: {
    maxWidth: "800px",
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
  table: {
    "& .MuiTableCell-root": {
      padding: "7px 0",
      fontSize: 18,
      lineHeight: "32px",
      border: 0,
      width: 120,
    },
    "& .MuiTableCell-head": {
      fontFamily: "BarlowBold",
      fontSize: 14,
    },
    "& a": {
      color: "#62929E",
      fontStyle: "italic",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  activity: {
    fontFamily: "BarlowRegular",
  },
  price: {
    display: "flex",
    "& img": {
      marginRight: 2,
    },
  },
  listBox: {
    padding: "5px 0",
    borderTop: "1px solid #000",
    fontSize: 16,
    "& img": {
      width: 14,
    },
  },
  label: {
    fontSize: 10,
    marginRight: 5,
    color: "#000",
  },
  address: {
    color: "#62929E",
    fontStyle: "italic",
  },
}));

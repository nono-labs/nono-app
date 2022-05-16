import Modal from "@/components/modal";
import Images from "@/constant";
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
const ComponentModal = (props) => {
  const { open, setOpen } = props;

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

  return (
    <Box className={classes.box}>
      <Hidden xsDown implementation="css">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow className={classes.tableRow} key={row.Activity + i}>
                <TableCell
                  // className={classes.activity}
                  component="th"
                  scope="row"
                >
                  {row.Activity}
                </TableCell>
                <TableCell>
                  <Grid container className={classes.price}>
                    <img src={Images.avatar} />
                    {row.calories}
                  </Grid>
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
                <Typography className={classes.label}>Items</Typography>
                <Box className={classes.price}>
                  <img src={Images.avatar} />
                  0.59
                </Box>
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
                <Typography className={classes.address}>0xc4c16...</Typography>
              </Grid>
              <Grid alignItems="center" container item xs={4}>
                <Typography className={classes.label}>To</Typography>
                <Typography className={classes.address}>0xc4c16...</Typography>
              </Grid>
              <Grid alignItems="center" container item xs={4}>
                <Typography className={classes.label}>Time</Typography>
                <Typography className={classes.address}>2 days ago</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Hidden>
    </Box>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "50px 103px",
    background: "#fff",
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
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
  tableRow: {
    borderTop: "1px solid #000",
  },
}));

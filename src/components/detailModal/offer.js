import TextBtn from "@/components/btn";
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
  Typography
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";
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
    <Modal open={open} setOpen={setOpen} maxWidth={700} title={"Offers"}>
      <Hidden xsDown implementation="css">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Offered By</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Floor Difference</TableCell>
              <TableCell>Expiration</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row.Activity + i}>
                <TableCell component="th" scope="row">
                  {row.Activity}
                </TableCell>
                <TableCell>
                  <Grid container className={classes.price}>
                    <img src={Images.weth} />
                    {row.calories}
                  </Grid>
                </TableCell>
                <TableCell className={classes.activity}>{row.fat}</TableCell>
                <TableCell className={classes.activity}>{row.carbs}</TableCell>
                <TableCell>
                  {row.Activity == "Sale" ? (
                    <TextBtn
                      bg={0}
                      onClick={() => {}}
                      className={classes.btnCancel}
                      text="cancel"
                    />
                  ) : (
                    <TextBtn
                      onClick={() => {}}
                      className={classes.btnCancel}
                      text="Accept"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Hidden>
      <Hidden smUp implementation="css">
        {rows.map((row, i) => (
          <Box key={i} className={classes.listBox}>
            <Grid justifyContent="space-between" alignItems="center" container>
              <Box>
                <Box className={classes.price}>
                  <Typography className={classes.label}>By</Typography>
                  <Typography>You</Typography>
                </Box>
                <Box className={classes.price}>
                  <Typography className={classes.label}>Price</Typography>
                  <Box className={classes.price}>
                    <img src={Images.weth} />
                    0.59
                  </Box>
                </Box>
              </Box>
              <TextBtn
                onClick={() => {}}
                className={clsx(classes.btnCancel, classes.btnMobile)}
                text="cancel"
              />
            </Grid>
            <Grid container>
              <Grid alignItems="center" container item xs={6}>
                <Typography className={classes.label}>Floor Diff</Typography>
                <Typography>41% below</Typography>
              </Grid>
              <Grid alignItems="center" container item xs={6}>
                <Typography className={classes.label}>Expiration</Typography>
                <Typography>3d 14h 55m</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Hidden>
    </Modal>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
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
      // color: "#62929E",
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
    alignItems: "center",
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
    fontFamily: "BarlowRegular",
  },
  address: {
    color: "#62929E",
    fontStyle: "italic",
  },
  btnCancel: {
    height: 32,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
  },
  btnMobile: {
    background: "#62929E",
    color: "#fff",
    border: 0,
    "&:hover": {
      background: "#62929E",
    },
  },
}));

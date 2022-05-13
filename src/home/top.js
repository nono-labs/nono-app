import TextBtn from "@/components/btn";
import Images from "@/constant";
import {
  Box,
  Card,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

export default function TopCollections(props) {
  console.log("home");
  const classes = useStyle();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Azuki", 356, 16.0, 49, 3.9),
    createData("Azuki1", 356, 16.0, 49, 3.9),
    createData("Azuki2", 356, 16.0, 49, 3.9),
  ];
  return (
    <Card variant="outlined" className={classes.root}>
      <Typography style={{ textAlign: "center" }} className={classes.title}>
        Top Collections
      </Typography>
      <Table classes={{ root: classes.head }} aria-label="caption table">
        <caption style={{ padding: 0 }}>
          <Grid
            justifyContent="center"
            direction="row"
            alignItems="center"
            container
          >
            <TextBtn
              width={200}
              onClick={() => {}}
              className={classes.buttonAsset}
              text="TextBtn"
            />
          </Grid>
        </caption>
        <TableHead>
          <TableRow>
            <StyledTableCell>Collection</StyledTableCell>
            <StyledTableCell>Floor</StyledTableCell>
            <StyledTableCell>24h Vol</StyledTableCell>
            <StyledTableCell>Total Vol</StyledTableCell>
            <StyledTableCell>Owner</StyledTableCell>
            <StyledTableCell>Item</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.accordBox}>
        {rows.map((row, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon htmlColor={"#000"} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={classes.accordion}>
                <Box className={classes.heading}>
                  <span>{index + 1}</span>
                  <img src={Images.avatar} />
                  <span>{row.name}</span>
                </Box>
                <Box className={classes.content}>
                  <span>Floor</span>
                  <div className={classes.tableCell}>
                    <img src={Images.eth} />
                    <span className={classes.value}>0.19</span>
                    <span className={classes.rateDown}>-2.34%</span>
                  </div>
                </Box>
                <Box className={classes.content}>
                  <span>24h Vol</span>
                  <div className={classes.tableCell}>
                    <img src={Images.eth} />
                    <span className={classes.value}>0.59</span>
                    <span className={classes.rateUp}>+2.34%</span>
                  </div>
                </Box>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.accordion}>
                <Box className={classes.content}>
                  <span>Floor</span>
                  <div className={classes.tableCell}>
                    <img src={Images.eth} />
                    <span className={classes.value}>0.19</span>
                    <span className={classes.rateDown}>-2.34%</span>
                  </div>
                </Box>
                <Box className={classes.content}>
                  <span>24h Vol</span>
                  <div className={classes.tableCell}>
                    <img src={Images.eth} />
                    <span className={classes.value}>0.59</span>
                    <span className={classes.rateUp}>+2.34%</span>
                  </div>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Card>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    background: "#fff",
    padding: "100px",
    margin: `${theme.custom.palette.defaultspacing} 0px`,
    [theme.breakpoints.down("md")]: {
      margin: `${theme.custom.palette.mdspacing} 0px`,
      padding: "20px",
    },
  },
  title: {
    fontFamily: "ArchivoBlack",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "36px",
    textAlign: "center",
    marginBottom: theme.custom.palette.defaultspacing,
    [theme.breakpoints.down("md")]: {
      paddingTop: "12px",
      marginBottom: theme.custom.palette.mdspacing,
    },
  },
  head: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heading: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontSize: "18px",
      lineHeight: "30px",
      color: "#000",
    },
    "& img": {
      margin: "0 17px",
    },
  },
  accordion: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "30px",
    color: "#000",
    paddingLeft: "70px",
    display: "flex",
    alignItems: "center",
    "& span:first-child": {
      width: "70px",
    },
  },
  tableCell: {
    fontSize: "14px",
    lineHeight: "30px",
    color: "#000",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "12px",
      marginRight: "3px",
    },
  },
  value: {
    paddingRight: "6px",
  },
  accordBox: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  rateUp: {
    color: "#FF2E2E",
  },
  rateDown: {
    color: "#00CF9E",
  },
  buttonAsset: {
    marginTop: 50,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: "18px",
    borderBottom: "1px solid #000",
    padding: "14px",
  },
  body: {
    fontSize: "18px",
    borderBottom: "1px solid #000",
    padding: "14px",
  },
}))(TableCell);
const Accordion = withStyles({
  root: {
    alignItems: "baseline",
    borderBottom: "1px solid rgba(0, 0, 0, 1)",
    borderRadio: 0,
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);
const AccordionSummary = withStyles({
  root: {
    alignItems: "baseline",
    padding: 0,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      margin: "0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: 0,
  },
}))(MuiAccordionDetails);

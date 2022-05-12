import TextBtn from "@/components/btn";
import Modal from "@/components/modal";
import Images from "@/constant";
import {
  Box, Chip, ClickAwayListener, Grid, IconButton, InputBase, makeStyles, Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, Typography, withStyles
} from "@material-ui/core";
import {
  CloseOutlined as CloseOutlinedIcon, Search as SearchIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import React, { useState } from "react";
import TraitModal from "../filterMobile/trait";

const CollectionModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleTrait, setVisibleTrait] = useState(false);

  const classes = useStyles();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData(
      "Frozen yoghurtFrozen yo gh urtr ozen yoghu rtFrozen yoghurt",
      159,
      6.0,
      24,
      4.0
    ),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];
  const onSearch = (event) => {
    setFocussed(true);
    if (event.key === "Enter") {
      console.log(12412412);
    }
  };
  const onSearchCancel = () => {
    setSearchTerm("");
    setFocussed(false);
  };
  const onFocusLoss = () => {
    setFocussed(false);
  };
  return (
    <Modal open={open} setOpen={()=>setOpen(false)} maxWidth={700} title={"Collection"}>
      <Box>
        {new Array(9).fill().map((_, i) => (
          <Chip
            label={`Bored Ape ${i}`}
            key={i}
            icon={<img src={Images.avatar} />}
            onDelete={() => {}}
            deleteIcon={
              <Box className={classes.deleteIcon}>
                <Typography
                  onClick={() => setVisibleTrait(true)}
                  className={classes.setTrait}
                >
                  Set Traits
                </Typography>
                <img onClick={() => {}} src={Images.traitClose} />
              </Box>
            }
            variant="outlined"
            className={classes.chip}
          />
        ))}
      </Box>
      <ClickAwayListener onClickAway={onFocusLoss}>
        <Box
          className={classes.search}
          borderRadius={theme.shape.borderRadius}
          bgcolor={
            isFocussed
              ? theme.palette.background.default
              : theme.palette.background.highlight
          }
          boxShadow={isFocussed ? 2 : 0}
          height={"3rem"}
        >
          <Box className={classes.searchIcon}>
            <SearchIcon htmlColor={"#000"} />
          </Box>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={searchTerm}
            onClick={() => setFocussed(true)}
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={onSearch}
          />
          {isFocussed ? (
            <IconButton hidden={!isFocussed} onClick={onSearchCancel}>
              <CloseOutlinedIcon
                htmlColor={theme.custom.palette.noteBackground.default}
              />
            </IconButton>
          ) : null}
        </Box>
      </ClickAwayListener>
      <Table classes={{ root: classes.head }} aria-label="caption table">
        <caption className={classes.btnBox} style={{ padding: 0 }}>
          <Grid
            justifyContent="center"
            direction="row"
            alignItems="center"
            container
          >
            <TextBtn
              className={classes.btnSpace}
              onClick={() => {}}
              text={"Apply"}
            />
          </Grid>
        </caption>
        <TableHead>
          <TableRow>
            <StyledTableCell>Collection</StyledTableCell>
            <StyledTableCell>Floor Price</StyledTableCell>
            <StyledTableCell>24h Volume</StyledTableCell>
            <StyledTableCell>Set Traits</StyledTableCell>
            <StyledTableCell>Add to Filter</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.name + i}>
              <StyledTableCell>
                <Box className={classes.grow}>
                  <img src={Images.avatar} />
                  {row.name}
                </Box>
              </StyledTableCell>
              <StyledTableCell>
                <Grid container>
                  <img src={Images.eth} />
                  0.55
                </Grid>
                <Typography className={classes.priceRate}>+1.53%</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Grid container>
                  <img src={Images.eth} />
                  {row.fat}k
                </Grid>
                <Typography className={classes.priceRate}>+1.53%</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Box
                  onClick={() => setVisibleTrait(true)}
                  className={classes.traitBtn}
                >
                  Set Traits
                </Box>
              </StyledTableCell>
              <StyledTableCell>
                <img className={classes.addto} src={Images.traitAdd} />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TraitModal open={visibleTrait} setOpen={() => setVisibleTrait(false)} />
    </Modal>
  );
};
export default CollectionModal;

const useStyles = makeStyles((theme) => ({
  chip: {
    height: "32px",
    justifyContent: "flex-start",
    fontFamily: "BarlowRegular",
    borderColor: "#000",
    fontSize: 14,
    fontFamily: "BarlowRegular",
    marginBottom: 10,
    marginRight: 10,
    "& img": {
      width: 24,
    },
    "& svg": {
      color: "#62929E",
    },
    "& .MuiChip-deleteIcon:hover, & .MuiChip-deleteIcon:click": {
      color: "#fff",
    },
  },
  deleteIcon: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    marginLeft: "auto",
    width: "auto",
    "& img": {
      width: 24,
    },
  },
  setTrait: {
    fontSize: 12,
    color: "#62929E",
    height: 24,
    lineHeight: "20px",
    boxSizing: "border-box",
    border: "1px solid #62929E",
    borderRadius: "16px",
    padding: "0 5px",
    marginRight: 5,
  },
  grow: {
    display: "flex",
    maxWidth: 200,
    "& img": {
      width: 24,
      height: 24,
      marginRight: 5,
    },
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "32px",
  },

  search: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: 40,
    marginBottom: 15,
    marginTop: 20,
    border: "2px solid #000000",
    boxSizing: "border-box",
    borderRadius: 10,
    background: "#fff",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    flex: 1,
    alignItems: "center",
  },
  inputInput: {
    width: "100%",
    color: "#000",
  },
  btnBox: {
    position: "sticky",
    bottom: 0,
  },
  btnSpace: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  priceRate: {
    fontSize: 14,
    lineHeight: "14px",
  },
  traitBtn: {
    color: "#62929E",
    border: "2px solid #62929E",
    height: 32,
    lineHeight: "28px",
    padding: "0 7px",
    borderRadius: 16,
    fontSize: 14,
    display: "inline-block",
    cursor: "pointer",
  },
  addto: {
    width: 32,
    cursor: "pointer",
  },
}));
const StyledTableCell = withStyles(() => ({
  head: {
    fontSize: "14px",
    borderBottom: 0,
    padding: 0,
    lineHeight: "21px",
  },
  body: {
    fontSize: "16px",
    borderBottom: 0,
    padding: "7px 0",
    alignItems: "center",
  },
}))(TableCell);

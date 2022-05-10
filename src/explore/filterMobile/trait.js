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
  Grid,
  MenuItem,
  Paper,
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

const TraitModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [sort, setSort] = useState(10);

  // const [open, setOpen] = useState(true);
  const classes = useStyles();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

  const handleChange = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleOk = () => {
    console.log()
  }
  return (
    <Dialog
      onClose={setOpen}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <header>
          <Typography classes={{ root: classes.title }}>Trait</Typography>
          <CloseIcon onClick={setOpen} classes={{ root: classes.closeIcon }} />
        </header>
        <Grid container alignItems="center" className={classes.titleBox}>
          <img src={Images.avatar} />
          Meebit
        </Grid>
        <Box>
          <Chip
            label="Deletable secondaryDeletable secondar"
            onDelete={() => {}}
            deleteIcon={<img src={Images.traitClose} />}
            variant="outlined"
            className={classes.chip}
          />
          <Chip
            label="Deletable"
            onDelete={() => {}}
            deleteIcon={<img src={Images.traitClose} />}
            variant="outlined"
            className={classes.chip}
          />
          <Chip
            label="Deletable"
            onDelete={() => {}}
            deleteIcon={<img src={Images.traitClose} />}
            variant="outlined"
            className={classes.chip}
          />
          <Chip
            label="Deletable secondaryDeletable secondar"
            onDelete={() => {}}
            deleteIcon={<img src={Images.traitClose} />}
            variant="outlined"
            className={classes.chip}
          />
        </Box>
        <Box mb="5px" >
          <Grid container>
            <Grid item xs={6}>
              Property
            </Grid>
            <Grid item xs={6}>
              Trait
            </Grid>
          </Grid>
        </Box>
        {new Array(12).fill().map((_, i) => (
          <Box mb="15px" key={i}>
          <Grid container>
            <Grid item xs={6}>
              Bread
            </Grid>
            <Grid item xs={6}>
              <Select
                value={sort}
                className={classes.select}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        ))}
        
        <TextBtn
          className={classes.btnSpace}
          onClick={() => handleOk()}
          text={"Apply"}
        />
      </DialogContent>
    </Dialog>
  );
};
export default TraitModal;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    margin: "0 auto",
    '& .MuiDialogContent-root:first-child': {
      paddingTop: 0,
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
      paddingBottom: "15px",
      position: 'sticky',
      top: 0,
      left: 0,
      background: '#fff',
      paddingTop: 15,
      zIndex: 99,
    },
  },
  title: {
    fontFamily: "ArchivoBlack",

    fontSize: "20px",
    lineHeight: "24px",
  },
  closeIcon: {
    fontSize: "24px",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
  titleBox: {
    display: "flex",
    fontSize: 16,
    marginBottom: 15,
    "& img": {
      width: 32,
      height: 32,
      marginRight: 10,
    },
  },
  chip: {
    marginRight: 5,
    marginBottom: 15,
  },
  btnSpace: {
    display: "flex",
    margin: "15px auto 0",
    position: 'sticky',
    bottom: 0,
  },
  select: {
    background: "#fff",
    border: "2px solid #62929E",
    color: "#62929E",
    borderRadius: "16px",
    "&:hover, &:focus, & .MuiSelect-selectMenu": {
      background: "#fff",
      borderRadius: "16px",
      border: "transparent",
    },
  },
}));

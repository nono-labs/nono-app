import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Drawer,
  IconButton,
  Switch,
  InputBase,
  Chip,
} from "@material-ui/core";
import Images from "@/constant";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import CollectionModal from "./collecion";
const FilterBox = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [visible ,setVisible] = useState(false)
  const toggleDrawer = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.checked });
  };
  const handleDelete = () => {};
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      // onOpen={toggleDrawer(anchor, true)}
    >
      <Grid container justifyContent="space-between" className={classes.header}>
        <Typography className={classes.filterText}>
          <img src={Images.filterMobile} />
          Filter
        </Typography>
        <IconButton onClick={setOpen} padding={0}>
          <CloseIcon htmlColor="#fff" />
        </IconButton>
      </Grid>
      <Box mb={"15px"}>
        <Typography className={classes.labelTitle}>Buy Now</Typography>
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Box>
      <Box mb={"15px"}>
        <Typography className={classes.labelTitle}>Price Range</Typography>
        <Grid container>
          <InputBase className={classes.input} placeholder="Max" />
          <img className={classes.ethw} src={Images.ethw} />
          <InputBase className={classes.input} placeholder="Min" />
        </Grid>
      </Box>
      <Box mb={"15px"}>
        <Typography className={classes.labelTitle}>Trait</Typography>
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />{" "}
        <Chip
          label="Deletable secondary"
          onDelete={handleDelete}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
         <IconButton onClick={()=>setVisible(true)} className={classes.noSpace} >
           <img src={Images.traitAdd} />
        </IconButton>
      </Box>
      <footer className={classes.footer}>Apply</footer>
      <CollectionModal open={visible} setOpen={()=>setVisible(false)} />
    </Drawer>
  );
};
export default FilterBox;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "100%",
    height: "100%",
    zIndex: 10000,
    background: "#000",
    color: "#fff",
    padding: 15,
    boxSizing: "border-box",
    paddingBottom: 50,
    position: "relative",
  },
  header: {
    marginBottom: "30px",
    "& .MuiIconButton-root": {
      padding: 0,
    },
    "& .MuiSvgIcon-root": {
      width: "40px",
      height: "40px",
    },
  },
  filterText: {
    display: "flex",
    color: "#fff",
    alignItems: "center",
    "& img": {
      marginRight: "15px",
    },
  },
  labelTitle: {
    lineHeight: "32px",
    marginBottom: 5,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 50,
    background: "#fff",
    color: "#000",
    lineHeight: "50px",
    textAlign: "center",
  },
  input: {
    border: "2px solid #62929E",
    borderRadius: "50px",
    height: 32,
    width: 100,
    textAlign: "center",
    "& .MuiInputBase-input": {
      textAlign: "center",
      color: "#62929E",
    },
  },
  ethw: {
    margin: "0 7px",
  },
  chip: {
    borderColor: "#fff",
    color: "#fff",
    width: "100%",
    justifyContent: "space-between",
    fontFamily: "BarlowRegular",
    marginBottom: 15,
    "& svg": {
      color: "#62929E",
    },
    "& .MuiChip-deleteIcon:hover": {
      color: "#62929E",
    },
  },
  noSpace:  {
    padding: 0
  }
}));

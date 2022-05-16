import Images from "@/constant";
import {
  Box, Chip, Drawer, Grid, IconButton, InputBase, makeStyles, Switch, Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import CollectionModal from "./collecion";
import TraitModal from "./trait";
const FilterBox = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [visible, setVisible] = useState(false);
  const [visibleTrait, setVisibleTrait] = useState(false);
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
  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
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
          className={classes.switch}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Box>
      <Box mb={"15px"}>
        <Typography className={classes.labelTitle}>Price Range</Typography>
        <Grid container>
          <InputBase className={classes.input} placeholder="Min" />
          <img className={classes.ethw} src={Images.ethw} />
          <InputBase className={classes.input} placeholder="Max" />
        </Grid>
      </Box>
      <Box mb={"15px"}>
        <Typography className={classes.labelTitle}>Collection</Typography>
        {new Array(12).fill().map((_, i) => (
          <Chip
            key={i}
            label="Deletable secondaryDeletable secondar"
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
                <img onClick={handleDelete} src={Images.traitClose} />
              </Box>
            }
            variant="outlined"
            className={classes.chip}
          />
        ))}
        <IconButton
          onClick={() => setVisible(true)}
          className={classes.noSpace}
        >
          <img src={Images.traitAdd} />
        </IconButton>
      </Box>
      <footer className={classes.footer}>Apply</footer>
      <CollectionModal open={visible} setOpen={() => setVisible(false)} />
      <TraitModal open={visibleTrait} setOpen={() => setVisibleTrait(false)} />
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
    boxSizing: "border-box",
    padding: "0px 15px 50px",
    position: "relative",
  },
  header: {
    marginBottom: "30px",
    position: "sticky",
    top: 0,
    paddingTop: 15,
    zIndex: 99,
    background: "#000",
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
    height: "40px",
    justifyContent: "flex-start",
    fontFamily: "BarlowRegular",
    marginBottom: 15,
    "& img": {
      width: 32,
    },
    "& svg": {
      color: "#62929E",
    },
    "& .MuiChip-deleteIcon:hover": {
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
      width: 32,
    },
  },
  setTrait: {
    fontSize: 12,
    color: "#62929E",
    height: 32,
    lineHeight: "28px",
    boxSizing: "border-box",
    border: "1px solid #62929E",
    borderRadius: "16px",
    padding: "0 5px",
    marginRight: 15,
  },
  noSpace: {
    padding: 0,
  },
  switch: {
    "& .MuiSwitch-track": {
      background: "#62929E",
      opacity: 1,
    },
  },
}));

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
      <Grid container mb={"15px"}>
       <Typography className={classes.filterItem}>Listed</Typography>
       <Typography className={classes.filterItem}>Unlisted</Typography>

      </Grid>
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
  filterItem: {
    width: 100,
    height: 32,
    lineHeight: "28px",
    marginRight: 30,
    border: "2px solid #62929E",
    borderRadius: 16,
    fontSize: 14,
    color: "#62929E",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      marginRight: 10,
    }
  },
}));

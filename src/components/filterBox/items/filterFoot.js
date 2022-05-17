import Images from "@/constant";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Drawer from "./drawer";

const FilterMobile = (props) => {
  const {filterType} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box className={classes.filterDriver} />
      <Box className={classes.filterBox}>
        <Typography
          onClick={() => setOpen(true)}
          className={classes.filterText}
        >
          <img src={Images.filterMobile} />
          Filter
        </Typography>
      </Box>
      <Drawer filterType={filterType} open={open} setOpen={() => setOpen(false)} />
    </>
  );
};
export default FilterMobile;

const useStyles = makeStyles((theme) => ({
  filterDriver: {
    height: "50px",
  },
  filterBox: {
    background: "#000",
    height: "50px",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  filterText: {
    display: "flex",
    color: "#fff",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      marginRight: "15px",
    },
  },
}));

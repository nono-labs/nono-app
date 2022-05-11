import { makeStyles, Box, Typography } from "@material-ui/core";
import Images from "@/constant";
import FilterBox from "./filter";
import { useState } from "react";

const FilterMobile = (props) => {
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
      <FilterBox open={open} setOpen={() => setOpen(false)} />
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

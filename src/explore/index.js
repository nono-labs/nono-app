import React from "react";
import {
  makeStyles,
  Grid,
  Hidden,
} from "@material-ui/core";
import FilterPrice from "./filter/price";
import NFT from "@/components/NFT";
import FilterMobile from "./filterMobile";
export default function Explore(props) {
  const classes = useStyle();

  console.log("Explore");
  return (
    <>
      <FilterPrice />
      <Grid
        // container
        // direction="row"
        // alignItems="stretch"
        className={classes.grid}
      >
        {[...Array(10)].map((item, index) => (
          <NFT style={{ border: "0" }} key={index} />
        ))}
      </Grid>
      <Hidden smUp>
        <FilterMobile />
      </Hidden>
    </>
  );
}
const useStyle = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: "#fff",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: 20,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 20,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: 20,
    },
  },
}));

import NFT from "@/components/NFT";
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import FilterPrice from "./filter/price";
import FilterMobile from "./filterMobile";
import {useGetListInfo} from '@/redux/explore'
import { useSelector, useDispatch } from "react-redux";

export default function Explore(props) {
  const { list, loading } = useSelector((state) => state.explore);

  // const dispatch = useDispatch();
  const classes = useStyle();
  // useEffect(()=>{
    // useGetListInfo()
  // }, [])
  console.log(list, loading,'list, loading')
  return (
    <>
      <FilterPrice />
      <Grid
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

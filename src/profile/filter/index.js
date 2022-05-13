import NFT from "@/components/NFT";
import {
  Grid,
  Hidden,
  makeStyles,
  Box,
  Typography,
  Divider,
  ClickAwayListener,
} from "@material-ui/core";
import React, { useState } from "react";
import Images from "@/constant";
import clsx from "clsx";
import TextBtn from "@/components/btn";
import Select from "@/components/select";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";
const tabs = [
  { label: "Owned", value: 0 },
  { label: "Offers to", value: 1 },
  { label: "Liked", value: 2 },
];
export default function Profile(props) {
  const classes = useStyle();
  const [isFocussed, setFocussed] = useState(false);
  const [tab, setTab] = useState(0);
  const [sort, setSort] = React.useState(10);
  const handleChange = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleChangeTab = (item) => {
    setTab(item.value);
  };
  return (
    <>
      <Grid className={classes.tabBox} container justifyContent="center">
        {tabs.map((obj, i) => (
          <Grid container item sm={4} key={i}>
            <Typography
              key={obj.value}
              onClick={() => handleChangeTab(obj)}
              className={clsx(classes.tab, tab === obj.value && classes.active)}
            >
              {obj.label}
            </Typography>
            {i < 2 && <Divider flexItem className={classes.divider} />}
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="space-between" className={classes.box}>
        <Box className={classes.grid}>
          <img src={Images.filter} />
          <Typography className={classes.filterItem}>Listed</Typography>
          <Typography className={classes.filterItem}>Unlisted</Typography>
        </Box>
        <Box className={classes.grew}>
          <div className={classes.itemsTotal}>13,495 items</div>
          <Select value={sort} onChange={handleChange} />
        </Box>
      </Grid>
    </>
  );
}
const useStyle = makeStyles((theme) => ({
  box: {
    background: "#fff",
    padding: "30px 50px",
    marginBottom: 50,
    borderRadius: 20,
    backdropFilter: "blur(21px)",
  },
  tabBox: {
    border: "2px solid #000",
    width: 450,
    boxSizing: "border-box",
    borderRadius: 10,
    overflow: "hidden",
    margin: "0 auto 30px",
    background: "#fff",
  },
  tab: {
    flex: 1,
    boxSizing: "border-box",
    height: 40,
    textAlign: "center",
    lineHeight: "40px",
    fontSize: 18,
    background: "#fff",
    cursor: "pointer",
  },
  active: {
    background: "#000",
    color: "#fff",
  },
  divider: {
    width: 2,
    background: "#000",
  },
  grid: {
    display: "flex",
    alignItems: "center",
  },
  filterItem: {
    width: 100,
    height: 32,
    lineHeight: "28px",
    marginLeft: 30,
    border: "2px solid #62929E",
    borderRadius: 16,
    fontSize: 14,
    color: "#62929E",
    textAlign: "center",
  },
  grew: {
    display: "flex",
    alignItems: "center",
  },
  itemsTotal: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "32px",
    marginRight: "50px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
    },
  },
}));

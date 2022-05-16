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
import Tabs from "@/components/tabs";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";
const tabs = [
  { label: "Owned", value: 0 },
  { label: "Offers to", value: 1 },
  { label: "Liked", value: 2 },
];
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Profile(props) {
  const classes = useStyle();
  const [isFocussed, setFocussed] = useState(false);
  const [tab, setTab] = useState(0);
  const [sort, setSort] = React.useState(10);
  const [value, setValue] = React.useState(0);

  const handleChange1 = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleChangeTab = (item) => {
    setTab(item.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs tabs={tabs} />
      <Grid container justifyContent="space-between" className={classes.box}>
        <Hidden xsDown>
          <Box className={classes.grid}>
            <img src={Images.filter} />
            <Typography className={classes.filterItem}>Listed</Typography>
            <Typography className={classes.filterItem}>Unlisted</Typography>
          </Box>
        </Hidden>
        <Box className={classes.grew}>
          <div className={classes.itemsTotal}>13,495 items</div>
          <Select value={sort} onChange={handleChange1} />
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
    [theme.breakpoints.down("md")]: {
      padding: 20,
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
      padding: 15,
    },
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
    [theme.breakpoints.down("md")]: {
      marginLeft: 15,
    },
  },
  grew: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      alignSelf: "flex-end",
      marginTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
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
  gridItem: {
    display: "flex",
    flex: 1,
  },
}));

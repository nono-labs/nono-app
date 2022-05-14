import NFT from "@/components/NFT";
import {
  Grid,
  Hidden,
  makeStyles,
  Box,
  Typography,
  Divider,
  ClickAwayListener,
  Tabs,
  Tab,
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

export default function Component(props) {
  const { tabs } = props;
  const classes = useStyle(props);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      indicatorColor="secondary"
      variant="fullWidth"
      className={classes.tabsList}
      value={value}
      onChange={handleChange}
    >
      {tabs.map((obj, i) => (
        <Tab
          key={i}
          disableRipple={true}
          classes={{ selected: classes.selected }}
          className={classes.tabItem}
          label={obj?.label}
        />
      ))}
    </Tabs>
  );
}
const useStyle = makeStyles((theme) => ({
  tabsList: {
    display: "block",
    background: "#fff",
    height: 40,
    minHeight: 0,
    lineHeight: "44px",
    borderRadius: 10,
    width: (props) => 150 * props?.tabs?.length,
    border: "2px solid #000",
    boxSizing: "border-box",
    margin: "0 auto 30px",
    [theme.breakpoints.down("xs")]: {
      width:() => '100%',
      marginBottom: 15,
    },
  },
  selected: {
    color: "#fff",
    background: "#000",
  },
  tabItem: {
    textTransform: "none",
    lineHeight: "36px",
    minHeight: 0,
    padding: 0,
    opacity: 1,
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    borderRight: "2px solid #000",
    fontSize: 16,
    "&:last-child": {
      borderRight: 0,
    },
  },
}));

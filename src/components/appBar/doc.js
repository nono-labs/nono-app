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

  return (
    <Box className={classes.root}>
      32
    </Box>
  );
}
const useStyle = makeStyles((theme) => ({
  root: {
    background: "#fff",
    padding: "30px 50px",
    marginBottom: 50,
    borderRadius: 20,
    backdropFilter: "blur(21px)",
    position: 'sticky',
    bottom: 0,
  },
 
}));

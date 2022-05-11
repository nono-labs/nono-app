import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Switch,
  InputBase,
  Hidden,
  IconButton,
  Chip,
} from "@material-ui/core";
import Images from "@/constant";
import CollectionModal from "./collectionModal";
import clsx from "clsx";
import Select from "@/components/select";
export default function FilterItem(props) {
  const classes = useStyle();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [visibleTrait, setVisibleTrait] = useState(false);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChangeSwitch = (event) => {
    setState({ [event.target.name]: event.target.checked });
  };
  const minPriceChange = (ev) => {
    setMinPrice(Number(ev.target.value));
  };
  const maxPriceChange = (ev) => {
    setMaxPrice(Number(ev.target.value));
  };
  const handleChange = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <Box className={classes.root}>
      <Hidden xsDown>
        <Grid justifyContent="space-between" container>
          <Box className={classes.filterBox}>
            <img className={classes.filter} src={Images.filter} />
            <Box className={classes.filterItem}>
              <Typography className={classes.titleLabel}>Buy Now</Typography>
              <Switch
                checked={state.checkedB}
                onChange={handleChangeSwitch}
                color="primary"
                name="checkedB"
                className={classes.switch}
              />
              <Box className={classes.priceBox}>
                <Typography className={classes.titleLabel}>
                  Price Range
                </Typography>
                <InputBase className={classes.input} placeholder="Min" />
                <img className={classes.ethw} src={Images.eth} />
                <InputBase className={classes.input} placeholder="Max" />
              </Box>
            </Box>
          </Box>
          <Hidden mdDown>
            <Box className={classes.grew}>
              <div className={classes.itemsTotal}>13,495 items</div>
              <Select
                value={sort}
                onChange={handleChange}
              />
            </Box>
          </Hidden>
        </Grid>
        <Grid className={classes.box}>
          <Typography className={classes.titleLabel}>Collection</Typography>
          <Box>
            {new Array(9).fill().map((_, i) => (
              <Chip
                label={`Bored Ape ${i}`}
                key={i}
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
              onClick={() => setOpen(true)}
              classes={{ root: classes.addIcon }}
            >
              <img src={Images.addIcon} />
            </IconButton>
          </Box>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Box className={clsx(classes.grew, classes.itemsRight)}>
          <Typography className={classes.itemsTotal}>13,495 items</Typography>
          <Select value={sort} onChange={handleChange} />
        </Box>
      </Hidden>
      <CollectionModal open={open} setOpen={setOpen} />
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: "#fff",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
      padding: 15,
      borderRadius: 10,
    },
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
  },
  filter: {
    width: "32px",
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
    },
  },
  filterItem: {
    fontSize: "18px",
    lineHeight: "32px",
    color: "#000",
    display: "flex",
    alignItems: "center",
  },
  priceBox: {
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 0,

    "& span": {
      paddingRight: 15,
    },
    "& img": {
      width: "18px",
      margin: "0 4px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  titleLabel: {
    fontSize: 18,
    marginRight: 5,
    lineHeight: "18px",
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
  grew: {
    display: "flex",
    alignItems: "center",
  },
  switch: {
    "& .MuiSwitch-track": {
      background: "#62929E",
      opacity: 1,
    },
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
  chip: {
    marginLeft: 15,
    height: "32px",
    justifyContent: "flex-start",
    fontFamily: "BarlowRegular",
    borderColor: "#000",
    fontSize: 14,
    fontFamily: "BarlowRegular",
    marginBottom: 10,
    "& img": {
      width: 24,
    },
    "& svg": {
      color: "#62929E",
    },
    "& .MuiChip-deleteIcon:hover, & .MuiChip-deleteIcon:click": {
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
      width: 24,
    },
  },
  setTrait: {
    fontSize: 12,
    color: "#62929E",
    height: 24,
    lineHeight: "20px",
    boxSizing: "border-box",
    border: "1px solid #62929E",
    borderRadius: "16px",
    padding: "0 5px",
    marginRight: 5,
  },
  addIcon: {
    padding: 0,
    marginLeft: 15,
    marginBottom: 10,
  },
  box: {
    marginTop: 20,
    display: "flex",
    flexWrap: "no-wrap",
  },
  itemsRight: {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      marginTop: 0,
    },
  },
}));

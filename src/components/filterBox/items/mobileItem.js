import Images from "@/constant";
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { AddCircleOutline as AddCircleOutlineIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";

const CollectionModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const classes = useStyles();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSearch = (event) => {
    setFocussed(true);
    if (event.key === "Enter") {
      console.log(12412412);
    }
  };
  const onSearchCancel = () => {
    setSearchTerm("");
    setFocussed(false);
  };
  const onFocusLoss = () => {
    setFocussed(false);
  };
  return (
    <>
      {new Array(12).fill().map((_, i) => (
        <Box key={i}>
          <Divider className={classes.divider} />
          <Box>
            <Grid justifyContent="space-between" container>
              <Box className={classes.grid}>
                <img className={classes.avatar} src={Images.avatar} />
                <Box>
                  <Typography className={classes.textHeight}>
                    RTFKT x Nike Dunk Genesis
                  </Typography>
                </Box>
              </Box>
              <AddCircleOutlineIcon
                className={classes.addCircleOutline}
                htmlColor="#62929E"
              />
            </Grid>
            <Box className={clsx(classes.grid, classes.vol)}>
              <Box className={classes.floorBox}>
                <span>Floor</span>
                <Typography className={classes.floorStyle}>
                  <img src={Images.eth} /> 0.59
                </Typography>
                <span>+ 1.23%</span>
              </Box>
              <Box className={classes.floorBox}>
                <span>24h Vol</span>
                <Typography className={classes.floorStyle}>
                  <img src={Images.eth} /> 0.59
                </Typography>
                <span>+ 1.23%</span>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default CollectionModal;

const useStyles = makeStyles((theme) => ({
  grow: {
    display: "flex",
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "32px",
  },
  chip: {
    background: "#fff",
    border: "0.5px solid #000000",
    boxSizing: "border-box",
    borderRadius: "15px",
    marginBottom: 0,
    marginRight: 15,
    root: {
      background: "#fff",
    },
    select: {
      background: "#fff",
    },
  },
  search: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: "40px",
    border: "2px solid #000000",
    boxSizing: "border-box",
    borderRadius: "10px",
    background: "#fff",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    flex: 1,
    alignItems: "center",
  },
  inputInput: {
    width: "100%",
    color: "#000",
  },
  divider: {
    background: "#000000",
    margin: "15px 0 10px",
  },
  avatar: {
    marginRight: 5,
  },
  addCircleOutline: {
    width: 32,
    height: 32,
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
  },
  vol: {
    justifyContent: "space-between",
  },
  textHeight: {
    lineHeight: "16px",
  },
  floorBox: {
    display: "flex",
    alignItems: "center",
    fontSize: "10px",
    lineHeight: "16px",
  },
  floorStyle: {
    margin: "0 5px",
    fontSize: 16,
    "& img": {
      width: 14,
    },
  },
  btnSpace: {
    display: "flex",
    margin: "15px auto 0",
    position: "sticky",
    bottom: 0,
  },
}));

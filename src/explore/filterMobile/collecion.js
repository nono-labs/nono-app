import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  makeStyles,
  Typography,
  InputBase,
  Chip,
  Box,
  ClickAwayListener,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import Images from "@/constant";
import { useTheme } from "@material-ui/styles";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import TextBtn from "@/components/btn";

const CollectionModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const [open, setOpen] = useState(true);
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
    <Dialog
      onClose={handleClose}
      open={open}
      classes={{ root: classes.Dialog, paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.DialogContent }}>
        <header className={classes.header}>
          <Typography classes={{ root: classes.title }}>Collection</Typography>
          <CloseIcon
            onClick={handleClose}
            classes={{ root: classes.closeIcon }}
          />
        </header>
        <ClickAwayListener onClickAway={onFocusLoss}>
          <Box
            className={classes.search}
            borderRadius={theme.shape.borderRadius}
            bgcolor={
              isFocussed
                ? theme.palette.background.default
                : theme.palette.background.highlight
            }
            boxShadow={isFocussed ? 2 : 0}
            height={"3rem"}
          >
            <div className={classes.searchIcon}>
              <SearchIcon htmlColor={"#000"} />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchTerm}
              onClick={() => setFocussed(true)}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={onSearch}
            />
            {isFocussed ? (
              <IconButton hidden={!isFocussed} onClick={onSearchCancel}>
                <CloseOutlinedIcon
                  htmlColor={theme.custom.palette.noteBackground.default}
                />
              </IconButton>
            ) : null}
          </Box>
        </ClickAwayListener>
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
        <TextBtn
          className={classes.btnSpace}
          onClick={() => {}}
          text={"Apply"}
        />
      </DialogContent>
    </Dialog>
  );
};
export default CollectionModal;

const useStyles = makeStyles((theme) => ({
  Dialog: {
    margin: "0 auto",
    '& .MuiDialogContent-root:first-child': {
      paddingTop: 0,
    },
  },
  paper: {
    maxWidth: "800px",
    margin: 0,
    width: "calc(100% - 30px)",
  },
  DialogContent: {
    color: "#000",
    padding: "0 15px 15px",
    "& header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "15px",
      position: 'sticky',
      top: 0,
      left: 0,
      background: '#fff',
      paddingTop: 15,
      zIndex: 99,
    },
  },
  title: {
    fontFamily: "ArchivoBlack",
    fontSize: "20px",
    lineHeight: "24px",
  },
  closeIcon: {
    fontSize: "30px",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
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
    position: 'sticky',
    bottom: 0,
  },
}));

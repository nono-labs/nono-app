import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon
} from "@material-ui/icons";
import { Box, InputBase, IconButton, Snackbar, ClickAwayListener } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Avatar from '@material-ui/core/Avatar';

import Images from '@/constant'

const data = [
  {
    label: 'Collections',
    value: [
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
    ]
  },
  {
    label: 'Profile',
    value: [
      {
        icon: Images.avatar,
        content: 'Enrico Cole',
      },
      {
        icon: Images.avatar,
        content: 'Enrico Cole',
      },
      {
        icon: Images.avatar,
        content: 'Enrico Cole',
      },
    ]
  },
  {
    label: 'Items',
    value: [
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
      {
        icon: Images.avatar,
        content: 'Bored Ape Yacht Club',
      },
    ]
  },
]
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  search: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    height: '40px',
    border: '2px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '10px',
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest
    }),
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    flex: 1,
    alignItems: "center"
  },
  inputInput: {
    width: "100%",
    color: '#000'
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid #000',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: theme.palette.background.default,
    fontFamily: 'Barlow',
    fontWeight: 600

  },
  header: {
    padding: '0 30px',
    height: '32px',
    lineHeight: '32px',
    borderBottom: '1px solid #000',
    '&:last-child': {
      textAlign: 'center',
      background: '#fff',
    },
    '&:first-child': {
      textAlign: 'left',
      background: '#ddd',
    },
  },
  itemList: {
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #000',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: '10px',
    }
  },
  iconAvator: {
    width: '24px',
    height: '24px',
  },
}));

const SearchBar = ({ onSearchClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowingToast, showToast] = useState(false);
  const [open, setOpen] = useState(false)
  const onSearchCancel = () => {
    setSearchTerm("");
    setFocussed(false);
    onSearchClose();
  };
  const onSearch = (event) => {
    setFocussed(true);
    if (event.key === "Enter") {
      setOpen(true)

    }
  }
  const onFocusLoss = () => {
    onSearchClose();
    setFocussed(false);
    setOpen(false)

  }
  const handleToastClose = () => {

  }

  return (
    <ClickAwayListener onClickAway={onFocusLoss}>
      <div className={classes.root}>
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
            <SearchIcon htmlColor={'#000'} />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            value={searchTerm}
            onClick={() => setFocussed(true)}
            inputProps={{ "aria-label": "search" }}
            onChange={event => setSearchTerm(event.target.value)}
            onKeyDown={onSearch}
          />
          {isFocussed ? (
            <IconButton hidden={!isFocussed} onClick={onSearchCancel}>
              <CloseOutlinedIcon htmlColor={theme.custom.palette.noteBackground.default} />
            </IconButton>
          ) : null}
        </Box>
        {open ? (
          <div className={classes.dropdown}>
            {
              data.map((item, index) => (
                <div key={index}>
                  <div className={classes.header}>{item.label}</div>
                  {
                    item.value.map((obj, i) => (
                      <div className={classes.itemList} key={`${index}_${i}`}><Avatar className={classes.iconAvator} src={obj.icon} /><span>{obj.content}</span></div>
                    ))
                  }
                  <div className={classes.header}>More</div>
                </div>
              ))
            }
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;

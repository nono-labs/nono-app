import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from "@material-ui/icons";
import { Box, InputBase, IconButton, Typography, ClickAwayListener, MenuItem } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const data = [
  {
    label: 'Recently Listed',
    value: 10
  },
  {
    label: 'Price - High to Low',
    value: 20
  },
  {
    label: 'Price - Low to High',
    value: 30
  },
]
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "200px",
    height: '32px',
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: '0 15px',
    boxSizing: 'border-box',
    borderRadius: '50px',
    background: '#fff',
    cursor: 'pointer',
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest
    }),
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      width: "100%",

    },
  },
  label: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
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
    top: 46,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid #000',
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: theme.palette.background.default,
    fontFamily: 'Barlow',
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 600,
    border: `2px solid ${theme.palette.secondary.main}`,
 
  },
  itemList: {
    minHeight: '32px',

    height: '32px',
    lineHeight: '32px',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    paddingLeft: '14px',
    display: 'flex',
    color: theme.palette.secondary.main,
    fontSize: 14,
    '& span': {
      marginLeft: '10px',
      fontSize: 14,

    },
    '&:last-child': {
      borderBottom: 0,
    },
    '& .MuiMenuItem-root': {
      lineHeight: '32px'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      
    },
  },
}));

const SearchBar = ({ label = 'Sort by', value, onChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isFocussed, setFocussed] = useState(false);
  const [sort, setSort] = useState("");
  const [isShowingToast, showToast] = useState(false);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setSort(value)
  }, [value])
  const onSearch = (event) => {
    setFocussed(true);
    if (event.key === "Enter") {
      setOpen(true)

    }
  }
  const onFocusLoss = () => {
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
          onClick={() => { setOpen(true); setFocussed(true) }}
        >
          <Typography className={classes.label}>{data.filter(obj => obj.value == sort)?.[0]?.label || 'Sort by'}</Typography>
          {isFocussed ? <ExpandLessIcon htmlColor={theme.palette.secondary.main} /> : <ExpandMoreIcon htmlColor={theme.palette.secondary.main} />}
        </Box>
        {open ? (
          <div className={classes.dropdown}>
            {
              data.map(item => (
                <MenuItem onClick={(e) => {
                  onChange && onChange(item.value);
                  onFocusLoss()
                }} className={classes.itemList} key={item.value}>{item.label}</MenuItem>
              ))
            }
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;

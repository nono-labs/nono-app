import Images from "@/constant";
import {
  Box,
  Chip,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState } from "react";
const FilterBox = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [visible, setVisible] = useState(false);
  const [visibleTrait, setVisibleTrait] = useState(false);
  const toggleDrawer = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.checked });
  };
  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <Drawer
      anchor={"bottom"}
      open={open}
      onClose={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.item}>Copy</Box>
      <Box className={classes.item}>Share on Twitter</Box>
      <Box className={classes.item}>Cancel<HighlightOffIcon  /></Box>
    </Drawer>
  );
};
export default FilterBox;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "100%",
    borderRadius: "10px 10px 0 0",
    border: "2px solid #000",
  },
  item: {
    height: 50,
    boxSizing: "border-box",
    borderBottom: "2px solid #000",
    fontSize: 14,
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "&:last-child": {
      border: 0,
    },
    '& svg': {
      marginLeft: 10,
      width: 18,
    }
  },
}));

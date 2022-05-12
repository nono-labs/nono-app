import Modal from "@/components/modal";
import Images from "@/constant";
import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const ComponentModal = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();

  function createData(Activity, calories, fat, carbs, protein) {
    return { Activity, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Sale", 1.7, "0xsa383...", "0xsa383...", "3 days ago"),
    createData("Mint", "-", "0xsa383...", "0xsa383...", "3 days ago"),
  ];
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      maxWidth={500}
      title={"Manage Listing"}
    >
      <Grid container wrap="nowrap" justifyContent="center">
        <Box className={classes.listBox}>
          <img src={Images.edit} />
          Lower Price
        </Box>
        <Box className={classes.listBox}>
          <img src={Images.cancel} />
          Cancel Listing
        </Box>
      </Grid>
    </Modal>
  );
};
export default ComponentModal;

const useStyles = makeStyles((theme) => ({
  listBox: {
    width: 185,
    height: 185,
    border: "2px solid #000000",
    cursor: "pointer",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    fontSize: 18,
    "&:last-child": { marginRight: 0 },
    "& img": {
      with: 90,
      marginBottom: 19,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 150,
      height: 150,
      "& img": {
        width: 64,
        marginBottom: 15,
      },
    },
  },
}));

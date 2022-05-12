import TextBtn from "@/components/btn";
import Modal from "@/components/modal";
import Select from "@/components/select";
import Images from "@/constant";
import { Box, Chip, Grid, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React, { useState } from "react";

const TraitModal = (props) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const [sort, setSort] = useState(10);

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

  const handleChange = (ev) => {
    console.log(ev, "ev");
    setSort(ev);
  };
  const handleOk = () => {
    console.log();
  };
  return (
    <Modal open={open} setOpen={setOpen} maxWidth={700} title={"Trait"}>
      <Grid container alignItems="center" className={classes.titleBox}>
        <img src={Images.avatar} />
        Meebit
      </Grid>
      <Box>
        <Chip
          label="Deletable secondaryDeletable secondar"
          onDelete={() => {}}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable"
          onDelete={() => {}}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable"
          onDelete={() => {}}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
        <Chip
          label="Deletable secondaryDeletable secondar"
          onDelete={() => {}}
          deleteIcon={<img src={Images.traitClose} />}
          variant="outlined"
          className={classes.chip}
        />
      </Box>
      <Box mb="5px">
        <Grid container>
          <Grid item xs={6}>
            Property
          </Grid>
          <Grid item xs={6}>
            Trait
          </Grid>
        </Grid>
      </Box>
      {new Array(12).fill().map((_, i) => (
        <Box mb="15px" key={i}>
          <Grid container>
            <Grid className={classes.property} item xs={6}>
              Bread
            </Grid>
            <Grid item xs={6}>
              <Select
                value={sort}
                className={classes.select}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
      ))}

      <TextBtn
        className={classes.btnSpace}
        onClick={() => handleOk()}
        text={"Apply"}
      />
    </Modal>
  );
};
export default TraitModal;

const useStyles = makeStyles((theme) => ({
  titleBox: {
    display: "flex",
    fontSize: 16,
    marginBottom: 15,
    "& img": {
      width: 32,
      height: 32,
      marginRight: 10,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 30,
      fontSize: 18,
    },
  },
  chip: {
    marginRight: 5,
    marginBottom: 15,
  },
  btnSpace: {
    display: "flex",
    margin: "15px auto 0",
    position: "sticky",
    bottom: 0,
  },
  select: {
    background: "#fff",
    border: "2px solid #62929E",
    color: "#62929E",
    borderRadius: "16px",
    "&:hover, &:focus, & .MuiSelect-selectMenu": {
      background: "#fff",
      borderRadius: "16px",
      border: "transparent",
    },
  },
  property: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
}));

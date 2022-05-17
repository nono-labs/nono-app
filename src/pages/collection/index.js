import FilterBox from "@/components/filterBox";
import NFT from "@/components/NFT";
import Tabs from "@/components/tabs";
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import ActivityBar from "./activityBar";
import ActivityTable from "./activityTable";
import Header from "./header";

const tabs = [
  { label: "Items", value: 0 },
  { label: "Activity", value: 1 },
];
export default function Profile(props) {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log(value, "value");
  return (
    <>
      <Header />
      <Tabs handleChangeTab={handleChange} tabs={tabs} />
      {value === 0 ? (
        <FilterBox filterType="Trait">
          <Grid className={classes.grid}>
            {[...Array(10)].map((item, index) => (
              <NFT style={{ border: "0" }} key={index} />
            ))}
          </Grid>
        </FilterBox>
      ) : (
        <>
          <Hidden xsDown implementation="css">
            <ActivityBar />
          </Hidden>
          <ActivityTable />
        </>
      )}
    </>
  );
}
const useStyle = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: "#fff",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: 20,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 20,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: 20,
    },
  },
}));

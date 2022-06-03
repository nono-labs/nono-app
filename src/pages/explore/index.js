import FilterBox from "@/components/filterBox";
import NFT from "@/components/NFT";
import { getListsAsync } from "@/store/modules/explore";
import { Grid, makeStyles, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import Images from "@/constant";
export default function Explore(props) {
  const { list, loading, hasMoreItems } = useSelector((state) => state.explore);
  const dispatch = useDispatch();
  const classes = useStyle();
  useEffect(() => {
    if (list.length === 0) dispatch(getListsAsync());
  }, []);

  const fetchItems = () => {
    if (!loading) dispatch(getListsAsync());
  };

  const loader = (
    <div key="loader" className={classes.loading}>
      Loading ...
    </div>
  );
  return (
    <>
      <FilterBox>
        <InfiniteScroll
          dataLength={list?.length}
          next={fetchItems}
          hasMore={hasMoreItems}

          // loader={loader}
        >
          {!loading && !list?.length && (
            <Box className={classes.noData}>
              <img src={Images.noData} />
            </Box>
          )}
          <Grid className={classes.grid}>
            {list?.map((item, index) => (
              <NFT item={item} style={{ border: "0" }} key={index} />
            ))}
            {loading &&
              Array(10)
                .fill()
                .map((item, index) => (
                  <NFT style={{ border: "0" }} key={index + "-"} />
                ))}
          </Grid>
        </InfiniteScroll>
      </FilterBox>
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
  loading: {
    textAlign: "center",
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 100,
  },
}));

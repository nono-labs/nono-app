import FilterBox from "@/components/filterBox";
import NFT from "@/components/NFT";
import { getListsAsync } from "@/store/modules/explore";
import { Grid, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
export default function Explore(props) {
  const { list, loading, hasMoreItems, page } = useSelector(
    (state) => state.explore
  );
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyle();
  useEffect(() => {
    if (list.length === 0) dispatch(getListsAsync({ size: 10 }));
  }, []);

  const fetchItems = useCallback(async () => {
    if (loading) {
      return;
    }
  }, [list, loading, hasMoreItems]);

  // const hasMoreItems = !!nextPageUrl;
  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  );

  return (
    <>
      <FilterBox>
        <InfiniteScroll
          loadMore={fetchItems}
          hasMore={hasMoreItems}
          loader={loader}
        >
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
}));

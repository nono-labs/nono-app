import Appbar from "@/components/appbar";
import Route from "@/router";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import "./App.css";

const useStyle = makeStyles((theme) => ({
  backdrop: {
    display: "flex",
    minHeight: "100vh",
    background: "#e5e5e5",
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.mixins.drawer.minWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  main: {
    padding: theme.padding.md50,
    [theme.breakpoints.between("sm", "md")]: {
      padding: theme.padding.md20,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 10px",
    },
  },
}));
function App() {
  const { pathname } = useLocation();
  const classes = useStyle();
  const [rootPage, setRootPage] = useState("");

  useEffect(() => {
    setRootPage(pathname.split("/")[1]);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <React.Suspense fallback={null}>
      <div className={clsx(classes.backdrop)}>
        <Appbar />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.main}>
            <Route />
          </div>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;

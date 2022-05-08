import { Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import Images from '@/constant'
import {
  Visibility as VisibilityIcon,
  Home as HomeIcon,
  Equalizer as EqualizerIcon,
  Redeem as RedeemIcon,
} from "@material-ui/icons";
const Home = React.lazy(() => import("@/home"));
const Explore = React.lazy(() => import("@/explore"));
const Details = React.lazy(() => import("@/components/Details"));

const Test = React.lazy(() => import("@/test"));

export const routesList = [
  {
    path: '/home',
    pathName: 'Home',
    logo: <HomeIcon />,
  },
  {
    path: '/explore',
    pathName: 'Explore',
    logo: <VisibilityIcon />,
  },
  {
    path: '/stats',
    pathName: 'Stats',
    logo: <EqualizerIcon />,
  },
  {
    path: '/rewards',
    pathName: 'Rewards',
    logo: <RedeemIcon />,
  }
]
const syncRouter = (table) => {
  let mRouteTable = [];
  table.forEach((route) => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>路由加载ing...</div>}>
          {route.component}
        </Suspense>
      ),
      children: route.children && syncRouter(route.children),
    });
  });
  return mRouteTable;
};

const RouterPage = ({ initialRoute }) => (
  <Routes>
    {/* <Route path="/" element={<Home />} > */}
    <Route path="*" element={<Navigate to="/home" />}></Route>
    <Route index path="/home" element={<Home />} />
    <Route path="/explore" element={<Explore />} />

    <Route index path="/explore/details" element={<Details />} />

    <Route path="/test" element={<Test />} />

    {/* </Route> */}
  </Routes>
);
export default RouterPage;

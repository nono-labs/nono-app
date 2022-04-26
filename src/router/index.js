import { Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import Images from '@/constant'

const Home = React.lazy(() => import("@/home"));
const Explore = React.lazy(() => import("@/explore"));
export const routesList = [
  {
    path: '/home',
    pathName: 'Home',
    logo: Images.home,
  },
  {
    path: '/explore',
    pathName: 'Explore',
    logo: Images.explore,
  }
]
const syncRouter = (table) => {
  let mRouteTable = []
  table.forEach(route => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>路由加载ing...</div>}>
          {route.component}
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  })
  return mRouteTable
}

const RouterPage = ({ initialRoute }) => (
  <Routes>
    {/* <Route path="/" element={<Home />} > */}
    <Route path="*" element={<Navigate to="/home" />}></Route>
    <Route index path="/home" element={<Home />} />
    <Route path="/explore/*" element={<Explore />} />
    {/* </Route> */}
  </Routes>
);
export default RouterPage;

import {Stack} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";


const DashboardLayout = () => {

  return (
    <Stack direction={"row"} sx={{height:"100vh"}}>
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;

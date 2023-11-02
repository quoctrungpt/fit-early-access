import React from "react";

// import HomePage, other pages from figma file

import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import TrieuChung from "../Pages/TrieuChung";
import Lao from "../Pages/Lao";
import LayLan from "../Pages/LayLan";
import PhatHien from "../Pages/PhatHien";
import ChuaTri from "../Pages/ChuaTri";
import Destigmatize from "../Pages/Destigmatize";
import CauChuyen from "../Pages/CauChuyen";
import SangKien from "../Pages/SangKien";
import TinTuc from "../Pages/TinTuc";

function AnimRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Lao" element={<Lao />} />
      <Route path="/TrieuChung" element={<TrieuChung />} />
      <Route path="/LayLan" element={<LayLan />} />
      <Route path="/PhatHien" element={<PhatHien />} />
      <Route path="/ChuaTri" element={<ChuaTri />} />
      <Route path="/Destigmatize" element={<Destigmatize />} />
      <Route path="/CauChuyen" element={<CauChuyen />} />
      <Route path="/SangKien" element={<SangKien />} />
      <Route path="/TinTuc" element={<TinTuc />} />

    </Routes>
  );
}

export default AnimRoutes;

// Pages in AnimRoutes
// Homepage/ Lao/ TrieuChung/ LayLan / PhatHien/ ChuaTri/ Destigmatize / CauChuyen / SangKien / TinTuc

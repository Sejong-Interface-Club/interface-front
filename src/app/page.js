"use client";

import Homepage from '../components/homepage.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Members } from "@/components/members";

const Page = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default Page;

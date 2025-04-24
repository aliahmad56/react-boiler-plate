// Layout.js
import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar with fixed width */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content (takes remaining space) */}
      <div className="flex-1 flex p-4 mt-16 flex-col min-h-screen">
        <Header />
        <main className="bg-[#FAFBFF] bg-black">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

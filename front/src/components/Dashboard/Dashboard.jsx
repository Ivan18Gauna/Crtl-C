import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <Sidebar />
    </div>
  );
}

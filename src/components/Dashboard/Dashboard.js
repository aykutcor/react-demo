import React, { useState } from "react";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";

function Dashboard() {
    const minHeight = window.innerHeight - 182;
  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        minHeight: minHeight,
      }}
    >
      Hello World!
    </div>
  );
}
export default Dashboard
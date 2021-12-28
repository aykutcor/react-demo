import React, { useState } from "react";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";

function Dashboard() {
    const minHeight = window.innerHeight - 182;
    const [text, setText] = useState("");
  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        minHeight: minHeight,
      }}
    >
      <input
          type="text"
          onChange={(e) => setText( e.target.value )}
          value={text}
        />
        <p>Hello World!</p><br/>
      <p>You wrote:  {text} </p>
      
    </div>
  );
}
export default Dashboard
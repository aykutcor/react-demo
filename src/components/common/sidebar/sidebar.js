import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";
import appActions from "../../../redux/app/actions";
import { Link } from "react-router-dom";
import options from "./options";

const { Sider } = Layout;
const { SubMenu } = Menu;
const { changeCurrent } = appActions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.App);
  const defaultKey = "dashboard";
  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        defaultSelectedKeys={defaultKey}
        mode="inline"
        onClick={handleClick}
        selectedKeys={
          current[0] === undefined || current[0] === "app" || current[0] === ""
            ? defaultKey
            : current[0]
        }
      >
        {}
        <Menu.Item key="dashboard">
          <Link to={"/app"} />
          <span>
            <HomeOutlined />
            <span>Dashboard</span>
          </span>
        </Menu.Item>
        <Menu.Item key="test">
          <Link to={"/app/test"} />
          <span>
            <UserOutlined />
            <span>Test Menu</span>
          </span>
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

import React, { useState } from "react";
import "./Dashboard.style.css";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import { UserOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import DashboardRoutes from "./DashboardRoutes";
import { Link, useRouteMatch } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const minHeight = window.innerHeight - 182;

  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          <Title style={{ float: "left", color: "white" }} level={3}>
            SMART
          </Title>
        </Header>
        <Layout>
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
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">
              <Link  to={"/app"} />
                <span>
                  <HomeOutlined />
                  <span>Dashboard</span>
                </span>
              </Menu.Item>
              <Menu.Item key="Test">
              <Link  to={"/app/test"} />
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
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <DashboardRoutes />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout example Created by @acdream
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
export default Dashboard;

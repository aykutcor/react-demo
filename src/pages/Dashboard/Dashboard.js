import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Dashboard.style.css";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import { UserOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import DashboardRoutes from "./DashboardRoutes";
import { Link, useRouteMatch } from 'react-router-dom';
import appActions from "../../redux/app/actions";
import Sidebar from "../../components/common/sidebar/sidebar"

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { changeCurrent } = appActions;

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
          <Sidebar/>
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

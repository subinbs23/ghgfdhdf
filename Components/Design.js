import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Link from "next/link";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link href="/dashboard">
      <a>Dashboard</a>
    </Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem("Vehicle Categories", "2", <DesktopOutlined />),
  getItem("Boat Managaemnt", "3", <DesktopOutlined />),
  getItem("User Management", "sub1", <UserOutlined />, [
    getItem("Boat owner Management", "4"),
    getItem(
      <Link href="/customerdashboard">
        <a>Customer Management</a>
      </Link>,
      "5"
    ),
    getItem("Admin Users", "6"),
  ]),
  getItem("Booking Management", "sub2", <TeamOutlined />, [
    getItem("Active Booking", "7"),
    getItem("Combined Booking", "8"),
    getItem("Completed Trips ", "9"),
    getItem("All Booking", "10"),
  ]),
  getItem("Commision Category Managaemnt", "11", <DesktopOutlined />),
  getItem("Financial Management", "sub3", <TeamOutlined />, [
    getItem("Transaction Management", "12"),
    getItem("Settlement", "13"),
  ]),
  getItem("Files", "11", <FileOutlined />),
];

const Design = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <li className="boat">
            <Link href="/">
              <a>BOOK MY BOAT</a>
            </Link>{" "}
          </li>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <div className="comphead">
            <Header>
              <Link href="/admindashboard">
                <a>ADMIN DASHBOARD</a>
              </Link>
            </Header>
          </div>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Design;

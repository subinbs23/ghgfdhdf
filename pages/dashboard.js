import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Space, Table, Switch } from "antd";
import {
  SearchOutlined,
  MailOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

//table data

const columns = [
  {
    title: "SlNO",
    dataIndex: "key",
  },
  {
    title: "BOAT ID",
    dataIndex: "boatid",
  },
  {
    title: "BOAT NAME",
    dataIndex: "name",
  },
  {
    title: "CATEGORY",
    dataIndex: "cat",
  },
  {
    title: "BOAT OWNER",
    dataIndex: "own",
  },
  {
    title: "CITY",
    dataIndex: "city",
  },
  {
    title: "",
    dataIndex: "icon",
  },
];
const data = [
  {
    key: "1",
    name: "SUNNY",
    boatid: "123",
    cat: "Tourist",
    own: "Luffy",
    city: "kerala",
    icon: [
      <MailOutlined />,
      <EyeOutlined />,
      <EditOutlined />,
      <DeleteOutlined />,
      <Switch />,
    ],
  },
  {
    key: "2",
    name: "MERMAID",
    boatid: "123",
    cat: "Fishing",
    own: "Marco",
    city: "Delhi",
    icon: [
      <MailOutlined />,
      <EyeOutlined />,
      <EditOutlined />,
      <DeleteOutlined />,
      <Switch />,
    ],
  },
  {
    key: "3",
    name: "Mary",
    boatid: "123",
    cat: "SailBoat",
    own: "Zoro",
    city: "Kolkata",
    icon: [
      <MailOutlined />,
      <EyeOutlined />,
      <EditOutlined />,
      <DeleteOutlined />,
      <Switch />,
    ],
  },
];

//table data end

const options = [
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Kerala",
    label: "Kerala",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
];

const dashboard = () => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        <Row gutter={10} style={{ width: 750 }}>
          <Col span={5}>
            <Card
              style={{
                backgroundColor: "#434343",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="TOTAL ENQUIRES" value={630} />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{
                backgroundColor: "#434343",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="CONFIRMED BOOKING" value={100} />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{
                backgroundColor: "#434343",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="COMPLETED BOOKING" value={410} />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{
                backgroundColor: "#434343",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="REFUNDED BOOKINGS" value={10} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ width: 750 }}>
          <Col span={4}>
            <Card
              style={{
                backgroundColor: "#874d00",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="TOTAL BOAT OWNERS" value={80} />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{
                backgroundColor: "#874d00",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="TOTAL CUSTOMERS" value={240} />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{
                backgroundColor: "#874d00",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="TOTAL AMOUNT RECEIVED" value={15000} />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{
                backgroundColor: "#874d00",
                height: 140,
                borderRadius: "10px",
              }}
            >
              <Statistic title="COMMISSION EARNED" value={2000} />
            </Card>
          </Col>
        </Row>
      </Space>
      <h1 className="tabletitile123">BOAT PENDING APPROVALS</h1>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        style={{ paddingTop: 30, marginRight: 250,marginBottom: 100 }}
      />

      <h1>RECENTLY REGISTERED OWNERS</h1>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        style={{ paddingTop: 30, marginRight: 250 }}
      />
    </Space>
  );
};

export default dashboard;

import React, { useState } from "react";
import Customereditform from "../Components/Customereditform";
import { Router, useRouter } from "next/router";

import {
  Input,
  Cascader,
  DatePicker,
  Space,
  Button,
  Tooltip,
  Table,
} from "antd";
const { Search } = Input;
import {
  SearchOutlined,
  MailOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Switch, Modal } from "antd";

const onChange = (value) => {
  console.log(value);
};

const customerdashboard = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedDetails, setEditedDetails] = useState(null);

  //table data

  const columns = [
    {
      title: "SLNO",
      dataIndex: "key",
    },
    {
      title: "Customer UserName",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone No.",
      dataIndex: "phone",
    },
    {
      title: "NO. OF BOOKING",
      dataIndex: "booking",
    },
    {
      title: "CITY",
      dataIndex: "city",
    },
    {
      title: "",
      dataIndex: "record",
      render: (record) => {
        return (
          <>
            <MailOutlined />
            <EyeOutlined style={{ marginLeft: 12 }} />
            <EditOutlined
              style={{ marginLeft: 12 }}
              onClick={() => {
                onEditDetails(record);
              }}
            />
            <DeleteOutlined
              style={{ marginLeft: 12, color: "red" }}
              onClick={() => {
                onDeleteDetails(record);
              }}
            />
            <Switch style={{ marginLeft: 12 }} />
          </>
        );
      },
    },
  ];
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "John Brown",
      email: "john@gmail.com",
      phone: "7568456",
      booking: "5",
      city: "kerala",
    },
    {
      key: "2",
      name: "Luffy",
      email: "luffy@s.com",
      phone: "7568456",
      booking: "8",
      city: "Mumbai",
    },
    {
      key: "3",
      name: "Peter",
      email: "p@gmail.com",
      phone: "7568456",
      booking: "10",
      city: "Delhi",
    },
  ]);

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

  //edit details

  const onEditDetails = (record) => {
    setIsEdit(true);
    setEditedDetails({ ...record });
  };

  const resetedit = () => {
    setIsEdit(false);
    setEditedDetails(null);
  };

  const onDeleteDetails = (record) => {
    Modal.confirm({
      title: "Are You Sure",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((dataSource) => dataSource.key !== record.key);
        });
      },
    });
  };

  return (
    <space direction="horizontal" allign="center">
      <h1>CUSTOMER MANAGEMENT</h1>
      <div className="filterby">
        <h2 className="filtertitle">Filter By</h2>
        <Input placeholder="Name" style={{ width: 400, margin: 10 }} />
        <Cascader
          options={options}
          onChange={onChange}
          placeholder="select City"
          style={{ width: 300, margin: 10 }}
        />
        <DatePicker
          onChange={onChange}
          style={{ width: 200, margin: 10 }}
          placeholder="From Date"
        />
        <DatePicker
          onChange={onChange}
          style={{ width: 200, margin: 10 }}
          placeholder="To Date"
        />
        <Tooltip title="search" placeholder="Search">
          <Button
            shape="circle"
            icon={<SearchOutlined />}
            style={{ margin: 10 }}
          />
        </Tooltip>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          style={{ paddingTop: 30 }}
        />
        <Modal
          title="Edit Details"
          okText="Save"
          visible={isEdit}
          onCancel={() => {
            resetedit();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((dataSource) => {
                if (dataSource.id === editedDetails.id) {
                  return editedDetails;
                } else {
                  return dataSource;
                }
              });
            });
            resetedit();
          }}
        >
          <Customereditform />
        </Modal>
      </div>
    </space>
  );
};

export default customerdashboard;

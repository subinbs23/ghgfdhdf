import React, { useContext, useState, map, useEffect } from "react";
import { Button, Checkbox, Form, Input, Select, Map } from "antd";
const { Option } = Select;
import { Router, useRouter } from "next/router";

const Customereditform = ({record}) => {
  const router = useRouter();
  const [loding, setLoding] = useState(true);
  const [editedDetails, setEditedDetails] = useState(null);

  // useEffect(() => {
  //   async function fetchEditedDetails() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     setEditedDetails(data);
  //     setLoding(false);
  //   }
  //   fetchEditedDetails();
  // }, []);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
          value={record?.name}
            onChange={(e) => {
              setEditedDetails((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            value={editedDetails?.email}
            onChange={(e) => {
              setEditedDetails((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Phone No."
          name="Phone No."
          rules={[
            {
              required: true,
              message: "Please input your phone no.!",
            },
          ]}
        >
          <Input
            value={editedDetails?.phone}
            onChange={(e) => {
              setEditedDetails((pre) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="No.of Booking"
          name="No.of Booking"
          rules={[
            {
              required: true,
              message: "Please input your bookings!",
            },
          ]}
        >
          <Input
            value={editedDetails?.booking}
            onChange={(e) => {
              setEditedDetails((pre) => {
                return { ...pre, booking: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          name="City"
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            value={editedDetails?.city}
            onChange={(e) => {
              setEditedDetails((pre) => {
                return { ...pre, city: e.target.value };
              });
            }}
          >
            <Option>Kerala</Option>
            <Option>Mumbai</Option>
            <Option>Delhi</Option>
            <Option>Chennai</Option>
            <Option>Kolkata</Option>
            <Option>Goa</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Customereditform;

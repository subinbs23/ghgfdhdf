import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";

const login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space direction="vertical" allign="center" style={{ marginLeft: 400 }}>
      <h1 className="logintitle">ADMINISTRATIVE LOGIN</h1>
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3 className="signintitile">Sign in with your email</h3>
        <Form.Item
          //label="email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="email" style={{ marginLeft: 20, width: 400 }} />
        </Form.Item>

        <Form.Item
          //label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="password"
            style={{ marginLeft: 20, width: 400 }}
          />
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>

        <Form.Item
        style={{ padding:40}}
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width:100}} >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default login;

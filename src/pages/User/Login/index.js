import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined, GoogleOutlined } from "@ant-design/icons"

const tailLayout = {
  wrapperCol: {
    span: 24
  }
};
export default function (props) {
  const onFinish = values => {
    console.log(values);
  };
  return (
    <Form layout="vertical" name="login-form" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input username"
          }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter password"
          }
        ]}
      >
        <Input prefix={<LockOutlined />} placeholder="password" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" block htmlType="submit">
          Log In
        </Button>
      </Form.Item>
      <div style={{ textAlign: "center", marginBottom: 5}}>or</div>
      <Form.Item {...tailLayout}>
      <Button block icon={<GoogleOutlined />}>Login with Google</Button>
      </Form.Item>
    </Form>
  );
}

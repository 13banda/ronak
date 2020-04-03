import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined, GoogleOutlined } from "@ant-design/icons"
import { useAuth0 } from "auth0";

const tailLayout = {
  wrapperCol: {
    span: 24
  }
};
function LoginForm(props) {
  const onFinish = values => {
    console.log(values);
  };

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
      <Button block onClick={() => loginWithRedirect({})} icon={<GoogleOutlined />}>Login with Google</Button>
      </Form.Item>
      {`is logined:${isAuthenticated}`}
    </Form>
  );
}

export default LoginForm;
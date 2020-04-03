import React from "react";
import { Card, Typography, Form, Input, Button, Select, Row, Col } from "antd";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    span: 4,
  }
};

function ProfilePage(props) {
  function onFinish(value) {
    console.log(value);
  }
  return (
    <Card
      bordered={false}
      title={<Typography.Title level={4}>Profile</Typography.Title>}
      style={{ margin: 15 }}
    >
      <Form
        {...layout}
        layout="vertical"
        name="profile-form"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Row>
          <Col offset={1} span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please inpur Name"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please inpur Email"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Nickname"
              name="mickname"
              rules={[
                {
                  required: true,
                  message: "Please input name"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Personal profile"
              name="personal_profile"
              rules={[
                {
                  required: true,
                  message: "Please input personal profile!"
                }
              ]}
            >
              <Select placeholder="Select a class" allowClear>
                <Option value="class 1">Class 1</Option>
                <Option value="class 2">Class 2</Option>
                <Option value="class 3">Class 3</Option>
                <Option value="class 4">Class 4</Option>
                <Option value="class 5">Class 5</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
      </Form>
    </Card>
  );
}
export default ProfilePage;

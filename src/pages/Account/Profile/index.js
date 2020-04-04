import React from "react";
import { Card, Typography, Form, Input, Button, Select, Row, Col, Avatar } from "antd";
import { useAuth0 } from "auth0";
const { Text } = Typography;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 4,
  },
};

function ProfilePage(props) {
  const { user } = useAuth0();
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
        onFinish={onFinish}
        hideRequiredMark
        initialValues={{
          name: user ? user.name : null,
          email: user ? user.email : null,
          nickname: user ? user.nickname : null
        }}
      >
        <Row>
          <Col offset={1} span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please inpur Name",
                },
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
                  message: "Please inpur Email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Nickname"
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "Please input name",
                },
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
                  message: "Please input personal profile!",
                },
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
            <Form.Item
              label="Personal profile"
              name="personal_profile"
              rules={[
                {
                  required: true,
                  message: "Please input personal profile!",
                },
              ]}
            >
              <Input.TextArea
                autoSize={{ minRows: 4, maxRows: 6 }}
                placeholder="Brief Introduction to your self"
              />
            </Form.Item>
            <Form.Item label="Address">
              <Input.Group compact>
                <Form.Item
                  name={["address", "province"]}
                  noStyle
                >
                   <Input style={{ width: "50%" }} placeholder="Input street" />
                </Form.Item>
                <Form.Item
                  name={["address", "street"]}
                  noStyle
                >
                  <Input style={{ width: "50%" }} placeholder="Input street" />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Update Information
              </Button>
            </Form.Item>
          </Col>
          <Col span={11} >
            <Text>Avatar</Text>
            <br />
            <Avatar src={user ? user.picture : null} size={130}/>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
export default ProfilePage;

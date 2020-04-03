import React from "react";
import { Card, Typography, Form, Input, Button, Select} from "antd";
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
    offset: 6,
    span: 2
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
        layout="vertical"
        name="add-student"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          label="Student Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please inpur student name"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Father Name"
          name="fatherName"
          rules={[
            {
              required: true,
              message: "Please inpur father name"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mother Name"
          name="motherName"
          rules={[
            {
              required: true,
              message: "Please inpur Mother name"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Class"
          name="class"
          rules={[
            {
              required: true,
              message: "Please select a class!"
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
export default ProfilePage;

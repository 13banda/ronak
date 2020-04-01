import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';
import { PageHeaderWrapper }  from 'components/MainLayout'
const { Option } = Select;

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    }
}
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 2,
    }
}
function AddStudentForm(props){
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <PageHeaderWrapper content="Add Student to Student List">
            <Card bordered={false}>
            <Form
                {...layout}
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
                            message: 'Please inpur student name'
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
                            message: 'Please inpur father name'
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
                            message: 'Please inpur Mother name'
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
                            message: 'Please select a class!'
                        }
                    ]}
                >
                    <Select 
                        placeholder="Select a class"
                        allowClear
                    >
                        <Option value="class 1">Class 1</Option>
                        <Option value="class 2">Class 2</Option>
                        <Option value="class 3">Class 3</Option>
                        <Option value="class 4">Class 4</Option>
                        <Option value="class 5">Class 5</Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </PageHeaderWrapper>
    )
}

export default AddStudentForm;
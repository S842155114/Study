import { Form, Input, InputNumber, Button } from 'antd';
import {connect} from "dva"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
};

function Employee({dispatch}) {
  const onFinish = (employee) => {
    dispatch({
      type: 'employee/add',
        payload: {
          employee: employee,
        },
  })
  };

  return (
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name='key' hidden='true'>
          <Input />
        </Form.Item>
        <Form.Item name='firstName' label="FirstName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='lastName' label="LastName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='age' label="Age" rules={[
          {
            type: 'number',
            min: 0,
            max: 200,
          },
        ]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name='address' label="Address">
          <Input />
        </Form.Item>
        <Form.Item name='tags' hidden='true'>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
  );
}

export default connect()(Employee)
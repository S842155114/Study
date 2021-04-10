import { Form, Input, InputNumber, Button } from 'antd';
import {connect} from "dva"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
};

function Employee(props) {
  const id = props.match.params.id
  const employees = props.employee
  const employee = employees.find((e)=>e.key===id)

  const onFinish = (employee) => {
    console.log(employee);
    props.dispatch({
      type: 'employee/update',
        payload: {
          employee: employee,
        },
  })
  };

  return (
      <Form {...layout} name="nest-messages" onFinish={onFinish} initialValues={employee} validateMessages={validateMessages}>
        <Form.Item name='key' hidden='true'>
          <Input />
        </Form.Item>
        <Form.Item name='firstName' label="FirstName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='lastName' label="LastName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='age' label="Age">
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

export default connect(({employee})=>({employee}))(Employee)
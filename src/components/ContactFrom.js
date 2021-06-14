import React, {useState, useEffect} from "react";
import { Form, Input, Button } from 'antd';

  const layout = {
    wrapperCol: { span: 24 },
  };

  const tailLayout = {
    wrapperCol: {span: 24 },
  };

  const { TextArea } = Input;
   

const ContactFrom = (props) => {

    const initialiFieldForm = {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [values, setValues] = useState(initialiFieldForm);

   const handleInputChnage = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value 
        });
        console.log([name] +" "+ value );
   }

   const handleFromSubmit = e => {
       e.preventDefault()
      // props.addOrEdit(values);

       console.log(values);
   }

    
    return ( 
      <Form>
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
        >
          <Input placeholder="Full Name" value={values.fullName} onChange={handleInputChnage} />
        </Form.Item>
        
        <Form.Item
          name="mobile"
          rules={[{ required: true, message: 'Please input your Mobile!' }]}
        >
          <Input placeholder="Mobile" value={values.mobile}  onChange={handleInputChnage} />
        </Form.Item>
        
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Eamil" value={values.email}  onChange={handleInputChnage} />
        </Form.Item>

        
        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please input your Address!' }]}
        >
          <TextArea rows={2}  placeholder="Address" value={values.address}  onChange={handleInputChnage} />
        </Form.Item>
        

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onChange={handleFromSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
     );
}
 
export default ContactFrom;
import React, {useState, useEffect} from "react";
import { Form, Input, Button } from 'antd';



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

   const handleInputChnage = e => { // OnChnage Input setting values in values varable
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value 
        });
   }

   const handleFromSubmit = e => { //OnClick Function this will trigger on submit button calling parentFunction in Contacts => addOrEdit
       e.preventDefault()
        props.addOrEdit(values);
   }
   
    return ( 
      <Form>
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
        >
          <Input name="fullName" placeholder="Full Name" value={values.fullName} onChange={handleInputChnage} />
        </Form.Item>
        
        <Form.Item
          name="mobile"
          rules={[{ required: true, message: 'Please input your Mobile!' }]}
        >
          <Input name="mobile" placeholder="Mobile" value={values.mobile}  onChange={handleInputChnage} />
        </Form.Item>
        
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input name="email" placeholder="Eamil" value={values.email}  onChange={handleInputChnage} />
        </Form.Item>

        
        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please input your Address!' }]}
        >
          <TextArea name="address" rows={2}  placeholder="Address" value={values.address}  onChange={handleInputChnage} />
        </Form.Item>
        

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={handleFromSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
     );
}
 
export default ContactFrom;
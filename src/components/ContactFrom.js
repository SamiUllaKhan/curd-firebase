import React, {useState, useEffect} from "react";
import { Modal, Form, Input, Button } from 'antd';

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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    

    useEffect(() => {
      console.log(props);
      // setIsModalVisible(true);
      if(props.currentId === '0'){
        setIsModalVisible(true);
        setValues({
          ...initialiFieldForm
        })
      } else if(props.currentId === ''){
        setValues({
          ...initialiFieldForm
        })
      } else {
        setIsModalVisible(true);
        setValues({
          ...props.contactObjects[props.currentId]
        })
      }
    }, [props.currentId, props.contactObjects])

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
      <>
        {/* <Tooltip title="Add New">
          <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={showModal} />
        </Tooltip> */}
        <Modal
        title={props.currentId === 0 ? "Add New Contact": "Update Contact"}
        visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Input name="fullName" placeholder="Full Name" value={values.fullName} onChange={handleInputChnage} />
          <br />
      <br />
          <Input name="mobile" placeholder="Mobile" value={values.mobile}  onChange={handleInputChnage} />
          <br />
      <br />
          <Input name="email" placeholder="Eamil" value={values.email}  onChange={handleInputChnage} />
          <br />
      <br />
          <TextArea name="address" rows={4}  placeholder="Address" value={values.address}  onChange={handleInputChnage} />
          <br />
      <br />
          <Form.Item {...tailLayout}>
            <Button type="primary" shape="round" htmlType="submit" onClick={handleFromSubmit}>
              {props.currentId === '' ? "Save":"Update"}
            </Button>
          </Form.Item>
        
        </Form>
      </Modal>
      </>
     );
}
 
export default ContactFrom;
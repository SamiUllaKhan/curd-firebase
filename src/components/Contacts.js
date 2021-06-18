import React, {useState, useEffect} from 'react';
import { Layout, Row, Col, Skeleton, Card, Avatar, Tooltip, Button } from 'antd';
import ContactFrom from './ContactFrom';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import firebase from '../firebase';

const { Content } = Layout;

const { Meta } = Card;
const db = firebase.database();

const Contacts = () => {
    
    var loading = false;
    
    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        db.ref('contacts').on('value', snapshot => {
            if(snapshot.val()){
                setContactObjects({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    const addOrEdit = obj => {
        const contactsRef = db.ref('contacts');
        const newContantsRef = contactsRef.push();
        newContantsRef.set(obj);
    }
    return ( 
        <>
        <Layout className="layout">
          <Content>
            <div style={{float: "right", padding: "20px 30px 0px 30px"}}>
                    <Tooltip title="Add New">
                        <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={() =>{setCurrentId('0')}} />
                    </Tooltip>
                </div>
            <Row style={{ padding: 20, margin: "10px 30px 10px 30px", backgroundColor: '#fff', display: "inline-flex", borderRadius: 10 }}>
                <ContactFrom {...({addOrEdit,currentId, contactObjects})}/>
                        <Col span={24}>
                    <Row>
                        {
                            Object.keys(contactObjects).map(id => {
                                return <Col key={id} span={6}  style={{padding: 8}}>
                                    <Card
                                        actions={[
                                            <EditOutlined key="edit" onClick={() =>{setCurrentId(id)}} />,
                                            <SettingOutlined key="setting" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                        loading={loading}>
                                        <Skeleton loading={loading} avatar active>
                                            <Meta
                                            avatar={
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={contactObjects[id].fullName}
                                            description={contactObjects[id].mobile + " " + contactObjects[id].email + " " + contactObjects[id].address}
                                            />
                                    </Skeleton>
                                </Card>
                            </Col>

                            })
                        }
                    </Row>
                </Col>      
            </Row>
          </Content>
        </Layout>
        </>
     );
}
 
export default Contacts;
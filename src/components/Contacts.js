import React, {useState, useEffect} from 'react';
import { Layout, Row, Col, Skeleton, Card, Avatar, Tooltip, Button, Empty, Table} from 'antd';
import ContactFrom from './ContactFrom';
import { EditOutlined, EllipsisOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import firebase from '../firebase';

const { Content } = Layout;

const { Meta } = Card;
const db = firebase.database();

const Contacts = () => {
    
    var loading = false;
    
    
    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('');
    var [visible, setVisible] = useState(false);


    useEffect(() => {
        db.ref('contacts').on('value', snapshot => {
            if(snapshot.val()){
                setContactObjects({
                    ...snapshot.val()
                })
            } else {
                setContactObjects({})
            }
        })
    }, [])

    const addOrEdit = obj => {
        var contactsRef = db.ref('contacts');
        var contactsSetRef = db.ref(`contacts/${currentId}`);
        if(currentId === '') {
            const newContantsRef = contactsRef.push();
            newContantsRef.set(obj);
        } else {
            contactsSetRef.set(obj);
        }
    }

    const onDelete = key => {
        setVisible(false);
      db.ref(`contacts/${key}`).remove();
    }

    return ( 
        <>
        <Layout className="layout">
            <ContactFrom {...({addOrEdit,currentId, contactObjects, visible})}/>
                {
               Object.keys(contactObjects).length > 0 ? 
               (
                    <Content>
                    <div style={{float: "right", padding: "20px 30px 0px 30px"}}>
                        <Tooltip title="Add New">
                            <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" 
                            onClick={() =>{
                                setCurrentId(''); 
                                setVisible(true); 
                                }} />
                        </Tooltip>
                    </div>
                        <Row style={{ padding: 20, margin: "10px 30px 10px 30px", backgroundColor: '#fff', display: "inline-flex", borderRadius: 10 }}>
                            <Col span={24}>
                                <Row>
                                    {
                                        Object.keys(contactObjects).map(id => {
                                            return <Col key={id} span={6}  style={{padding: 8}}>
                                                <Card
                                                    actions={[
                                                        <EditOutlined key="edit" onClick={() =>{setCurrentId(id); setVisible(true);}} />,
                                                        <DeleteOutlined key="Delete" onClick={() => onDelete(id) } />,
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
               ) : (
                
                        <Empty style={{marginTop: 20}}
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                            height: 60,
                            }}
                            description={
                            <span>
                                No Contacts Avaiable 
                            </span>
                            } >
                            <Button type="primary" shape="round" onClick={() =>{setCurrentId(''); setVisible(true);}} >Create Now</Button>
                        </Empty>
                    )
                }
        </Layout>
        </>
     );
}
 
export default Contacts;
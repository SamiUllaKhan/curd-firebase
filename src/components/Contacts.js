import React, {useState, useEffect} from 'react';
import { Row, Col, Skeleton, Card, Avatar } from 'antd';
import ContactFrom from './ContactFrom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import firebase from '../firebase';

const { Meta } = Card;
const db = firebase.database();

const Contacts = () => {
    
    var loading = false;
    
    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        db.ref('contacts').on('value', snapshot => {
            // console.log(snapshot.val());
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
            <Col span={8} style={{padding: 5}}>
                <ContactFrom {...({addOrEdit,currentId, contactObjects})}/>
            </Col>
            <Col span={16}>
                <Row>
                    {
                        Object.keys(contactObjects).map(id => {
                            return <Col key={id} span={6}  style={{padding: 2}}>
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
        </>
     );
}
 
export default Contacts;
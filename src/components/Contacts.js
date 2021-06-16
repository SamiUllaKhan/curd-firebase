import React from 'react';
import { List, Avatar } from 'antd';
import ContactFrom from './ContactFrom';
import firebase from '../firebase';

const db = firebase.database();

const Contacts = () => {
    const addOrEdit = obj => {
        console.log(obj);
        const contactsRef = db.ref('contacts');
        const newContantsRef = contactsRef.push();
        newContantsRef.set(obj);
    }
    return ( 
        <>
            <ContactFrom addOrEdit={addOrEdit} />
            <List.Item>
                <List.Item.Meta
                avatar={
                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">Mehanaz</a>}
                description="Progresser XTech"
                />
            </List.Item>
        </>
     );
}
 
export default Contacts;
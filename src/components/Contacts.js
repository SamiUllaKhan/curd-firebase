import React from 'react';
import { List, Avatar } from 'antd';
import ContactFrom from './ContactFrom';
// import firebaseDB from '../firebase';

const Contacts = () => {
    const addOREdit = obj => {
        console.log(obj);
        // firebaseDB.child('conatacts').push(
        //     obj, 
        //         err => {
        //             if(err)
        //                 console.log(err)
        //             }
        //     )
    }
    return ( 
        <>
            <ContactFrom addOREdit={addOREdit } />
            
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
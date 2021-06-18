import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Button, Tooltip, Row, notification } from 'antd';
import Contacts from './components/Contacts';
import { SmileOutlined, PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Header, Content, Footer } = Layout;

const openNotification = () => {
  notification.open({
    message: 'Welcome To React Firebase',
    description:
      'CURD Operations Implementing firebase Realtime database to Add, Read, Update and Delete in simaple formate',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

function App() {

      useEffect(()=>{
        openNotification();
        // do stuff here...
    }, []) // <-- empty dependency array

  return (
    <>
    <Layout>
        <Header className="header" style={{background: "#fff"}}>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Contacts/>
        <Footer style={{textAlign: "center", color: "rgb(124 124 124 / 85%)"}}>©2021 Created By Sami</Footer>
      </Layout>
    </>
  );
}

export default App;

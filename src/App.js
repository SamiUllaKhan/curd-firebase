import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, notification } from 'antd';
import Contacts from './components/Contacts';
import { SmileOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

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
        // openNotification();
        // do stuff here...
    }, []) // <-- empty dependency array

  return (
    <>
    <Layout>
        <Header className="header" style={{background: "#fff"}}>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Contact List</Menu.Item>
          </Menu>
        </Header>
        <Contacts/>
        <Footer style={{textAlign: "center", color: "rgb(124 124 124 / 85%)"}}>©2021 Created By Sami</Footer>
      </Layout>
    </>
  );
}

export default App;

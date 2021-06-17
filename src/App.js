import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Card, notification } from 'antd';
import Contacts from './components/Contacts';
import {SmileOutlined} from '@ant-design/icons';
import {useEffect} from 'react';

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
      <Layout className="layout">
        <Content style={{ padding: 20, margin: 30, backgroundColor: '#fff' }}>
          <Row>
              <Contacts/>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default App;

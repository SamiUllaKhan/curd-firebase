import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Card, PageHeader } from 'antd';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <PageHeader
      className="site-page-header"
      title="CURD Operation"/>
      <Row>
        <Col span={12} offset={6}>
          <Card style={{marginTop: 16 }} >
          <Contacts/>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;

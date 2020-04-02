import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ChartPizza from './components/ChartPizza';
import ChartBar from './components/ChartBar';
import Select from './components/Select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <ChartPizza/>
          </Col>
          <Col>
            <ChartPizza/>
          </Col>
          <Col>
            <ChartPizza/>
          </Col>
        </Row>
        <Row>
          <Col>          
            <Select/>
          </Col>
          <Col >
          </Col>
          <Col >
          </Col>
         </Row>
        <Row>
          <ChartBar/>
        </Row>
      </div>
    );
  }
}

export default App;

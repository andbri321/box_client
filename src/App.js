import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ChartPizza from './components/ChartPizza';
import ChartBar from './components/ChartBar';
import Select from './components/Select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [20, 5, 10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloxes: [],
      bloxes_id: []
    };
    this.loadBloxes = this.loadBloxes.bind(this);
  }

  async loadBloxes() {
    let response = await fetch(`http://localhost:3001/bloxes.json`);
    let bloxes = await response.json();

    this.setState({ bloxes: bloxes });
  }

  componentDidMount() {
    this.loadBloxes();
  }

  create_data(chart_name){
    if(this.state.bloxes.length != []){
      const cycles = this.state.bloxes[`${chart_name}`];
      
      const labels = Object.entries(cycles).map(([key, value]) => {
        return key
      })
      const values = Object.entries(cycles).map(([key, value]) => {
        return value
      })
      const Color = Object.entries(cycles).map(([key, value]) => {
        return `${"#"+((1<<24)*Math.random()|0).toString(16)}`
      })
      return {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: Color,
          hoverBackgroundColor:Color
        }]
      }
    }   

    return {}
  }

  render() {

    return (
      <div>
        {this.state.bloxes.length > 0 ? "false (caregando..)":
        <div>
        <Row>
          <Col>
          <ChartPizza blox={this.create_data('cycle')} title={"Blox por Àrea de Compentência"} />
          </Col>
          <Col>
            <ChartPizza blox={this.create_data('functional_area')} title={"Blox por Àrea Funcional"} />
          </Col>
          <Col>
            <ChartPizza blox={this.create_data('blox_profile')} title={"Blox por Perfil"} />
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
       }
      </div>
    );
  }
}

export default App;

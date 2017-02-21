import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';
import  Navigaatio from './components/Navigaatio/Navigaatio';
import  Harjoitukset from './components/Harjoitukset/Harjoitukset';
import  Harjoitus from './components/Harjoitus/Harjoitus';


const harjoitukset = [
  {
    key:1,
    nimi:'Maastaveto',
    sarjat:
      [
        '100',
        '120',
        '140',
        '160'
      ],
      done:false
    },
    {
      key:2,
      nimi:'Penkkipunnerrus',
      sarjat:
      [
        '60',
        '80',
        '90',
        '100'
      ],
      done:false
    },
    {
      key:3,
      nimi:'Leuanveto',
      sarjat:
      [
        '10',
        '20'
      ],
      done:false
    }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {selected:1,harjoitukset:harjoitukset};
    this.setSelectItem = this.setSelectItem.bind(this);
    this.setHarjoitusState = this.setHarjoitusState.bind(this);
  }

  setSelectItem(value){
    this.setState({selected:parseInt(value,10)});
    //console.log(value);
  }

  setHarjoitusState(value){
    this.setState(harjoitukset:value);
    //console.log('value',value);
  }

  render() {


    let selectedfromstate = this.state.selected-1;

    return (
      <div className="App">
        <Grid>
        <Row>
          <Col xs={12}>
            <h1>Harjoituspäiväkirja</h1>
          </Col>
        </Row>

          <Row>
            <Col xs={12}>
              <Navigaatio />
            </Col>
          </Row>

          <Row>

            <Col sm={4}>
                <Harjoitukset selected={this.state.selected} onChange={this.setSelectItem} inputti={this.state.harjoitukset} />
            </Col>
            <Col sm={8}>
              <Harjoitus valittu={selectedfromstate} harjoitukset={harjoitukset} setHarjoitusState={this.setHarjoitusState} />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;

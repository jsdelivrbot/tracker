import React, { Component } from 'react';
import {Grid, Row, Col, ButtonToolbar, Button} from 'react-bootstrap';

import './Harjoitus.css';

class Harjoitus extends Component{
  constructor(props){
    super(props);
    this.harjoitusDone = this.harjoitusDone.bind(this);
  }

  harjoitusDone(e){
    //console.log('this',this.props.valittu);
    this.props.setHarjoitusState(this.props.harjoitukset[this.props.valittu].done = true);
  }

  render(){
    const selected = this.props.valittu;
    const harjoitus = this.props.harjoitukset[selected];
    const sarjacount = Object.keys(harjoitus.sarjat).length;
    const isDone = harjoitus.done;

    let button = null;
    if (!isDone) {
      button =
      <Row>
      <Col xs={12}>
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.harjoitusDone}>Valmis!</Button>
        </ButtonToolbar>
        </Col>
      </Row>;
    }

      return(
        <Grid>
          <Row>
            <Col xs={12}>
                <h2>{harjoitus.nimi}
                </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
                <h4>Sarjat {sarjacount}</h4>
                <ul>
                {
                    harjoitus.sarjat.map(sarja =>
                      <li key={sarja}>{sarja} kg</li>
                     )
                }
                </ul>
            </Col>
          </Row>


          {button}


        </Grid>

      );
  }
}

export default Harjoitus;

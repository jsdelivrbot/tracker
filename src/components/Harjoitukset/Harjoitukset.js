import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './Harjoitukset.css';

class Harjoitukset extends Component{
  constructor(props){
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }


  selectItem(e){
    //console.log(e.target.value);
    this.props.onChange(e.target.value);
  }


  render(){
    let harjoituslista = this.props.inputti.map(harjoitus =>
        <ListGroupItem key={harjoitus.key} bsStyle={harjoitus.done?'success':'danger'} value={harjoitus.key} onClick={this.selectItem}>


          {harjoitus.nimi}

          <Badge>{
              Object.keys(harjoitus.sarjat).length
          }</Badge>
        </ListGroupItem>
    );


      return(
        <Grid>
          <Row>

            <Col xs={4}>
              <ListGroup>
                { harjoituslista }
              </ListGroup>

            </Col>
          </Row>
        </Grid>
      );
  }
}

export default Harjoitukset;

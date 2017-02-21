import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navigaatio extends Component{
  render(){
    return(
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">Harjoitus</NavItem>
      </Nav>
  );
  }
}

export default Navigaatio;

import React from "react";
import "./GenericPage.scss";

import Background from '../../components/background/Background';
import BottomBar from '../../components/bottom_bar/BottomBar';

import { Col } from 'react-bootstrap';

function GenericPage(props){  
    return (
      <div id='GenericPage'>
        <div className="content">
          <Col xs={12} sm={8} md={8} lg={5} id='app-col'>
            {props.children}
          </Col>
        </div>
        <BottomBar className='footer' />
        <Background />
      </div>
    )
  
}

export default GenericPage;
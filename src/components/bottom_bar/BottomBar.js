import React from 'react';
import { Row } from 'react-bootstrap';

import moment from 'moment';

import './BottomBar.scss';
import Tipping from '../tipping/Tipping';

export default class BottomBar extends React.Component {
    render() {
        return <footer>
            <Tipping />
            <Row id='info-row' sm={12}>
                <div className='info-col'><a href='/TOS.html'><p>Terms of Service</p></a></div>

                {/* <Col className='info-col'>&#160;&#8226;&#160;</Col> */}

                <div className='info-col'><a href='https://janhendrikewers.uk'><p> &#169; {moment().format('YYYY')} Jan-Hendrik Ewers</p></a></div>

                {/* <Col className='info-col'>&#160;&#8226;&#160;</Col> */}

                <div className='info-col'><a href='/privacy.html'><p>Privacy Policy</p></a></div>
            </Row>
        </footer>
    }
}
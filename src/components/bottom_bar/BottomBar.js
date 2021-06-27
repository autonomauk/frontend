import React from 'react';
import {Row} from 'react-bootstrap';

import moment from 'moment';

import './BottomBar.scss';

export default class BottomBar extends React.Component{
    render(){
        return <div className='footer'>
            <Row className='justify-content-center'>
                <a href='/TOS.html'><p>Terms of Service</p></a>
                &#160;&#8226;&#160;
                <a href='https://janhendrikewers.uk'><p> &#169; {moment().format('YYYY')} Jan-Hendrik Ewers</p></a>
                &#160;&#8226;&#160;
                <a href='/privacy.html'><p>Privacy Policy</p></a>
            </Row>
        </div>
    }
}
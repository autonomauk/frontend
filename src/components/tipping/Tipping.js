import React from 'react';

import bitcoin from '../../img/tipping/bitcoin.svg';
import ethereum from '../../img/tipping/ethereum.svg';
import dogecoin from '../../img/tipping/dogecoin.svg';
import { Row, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './Tipping.scss';

export default class Tipping extends React.Component{
    render(){
        return <OverlayTrigger
        placement='top'
        key='top'
        overlay={
            <Tooltip id='plz-donate'>
                Asking for donations isn't something I want to be doing, but sadly the reality is that I need to pay for the server and domain. This webapp is more or less a one-time use to set up the functionality and thus there is no ad revenue to support it.
            </Tooltip>
        }
        >
        <Row className='tipping-row'>
            <Row className='tipping-col'><img src={bitcoin} alt="BTC logo" height='24' width='24'></img>&#160;{process.env.REACT_APP_BITCOIN_ADDRESS}</Row>
            <Row className='tipping-col'><img src={ethereum} alt="ETH logo" height='24' width='24'></img>&#160;{process.env.REACT_APP_ETHEREUM_ADDRESS}</Row>
            <Row className='tipping-col'><img src={dogecoin} alt="DOGE logo" height='24' width='24'></img>&#160;{process.env.REACT_APP_DOGECOIN_ADDRESS}</Row>
        </Row>
        </OverlayTrigger>
    }
}

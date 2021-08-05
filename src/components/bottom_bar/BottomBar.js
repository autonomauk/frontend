import React from 'react';

import moment from 'moment';

import './BottomBar.scss';

import bitcoin from '../../img/tipping/bitcoin.svg';
import ethereum from '../../img/tipping/ethereum.svg';
import dogecoin from '../../img/tipping/dogecoin.svg'

const CRYPTOS = {
    BTC : "Bitcoin",
    DOGE : "Dogecoin",
    ETH: "Ethereum"

}

function copyCryptoToClipboard(crypto, str){
    navigator.clipboard.writeText(str);
    alert("Autonoma's " + crypto.toLowerCase() + " address has been copied. Thank you for donating!");   
}

export default class BottomBar extends React.Component {
    render() {
        return (<footer>
            <div className="bottom-bar">
                <div className="BTC donate-img"><a href={"bitcoin:"+process.env.REACT_APP_BITCOIN_ADDRESS} onClick={() => copyCryptoToClipboard(CRYPTOS.BTC, process.env.REACT_APP_BITCOIN_ADDRESS)}><img src={bitcoin} alt="BTC logo" height='100%' width='100%'/></a></div>
                <div className="ETH donate-img"><a href={"ethereum:"+process.env.REACT_APP_ETHEREUM_ADDRESS} onClick={() => copyCryptoToClipboard(CRYPTOS.ETH, process.env.REACT_APP_ETHEREUM_ADDRESS)}><img src={ethereum} alt="ETH logo" height='100%' width='100%'/></a></div>
                <div className="DOGE donate-img"><a href={"doge:"+process.env.REACT_APP_DOGECOIN_ADDRESS} onClick={() => copyCryptoToClipboard(CRYPTOS.DOGE,process.env.REACT_APP_DOGECOIN_ADDRESS)}><img src={dogecoin} alt="DOGE logo" height='100%' width='100%'/></a></div>
                <div className="PRIVACY website-text"><a className='link' href='/privacy.html'>Privacy Policy</a></div>
                <div className="COPYRIGHT website-text"><a className='link' href='https://janhendrikewers.uk'>&#169; {moment().format('YYYY')} Jan-Hendrik Ewers</a></div>
                <div className="TOS website-text"><a className='link' href='/TOS.html'>Terms of Service</a></div>
            </div>
        </footer>)
    }
}
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
            <div class="bottom-bar">
                <div class="BTC donate-img"><a onClick={() => copyCryptoToClipboard(CRYPTOS.BTC, process.env.REACT_APP_BITCOIN_ADDRESS)}><img src={bitcoin} alt="BTC logo" height='100%' width='100%'/></a></div>
                <div class="ETH donate-img"><a onClick={() => copyCryptoToClipboard(CRYPTOS.ETH, process.env.REACT_APP_ETHEREUM_ADDRESS)}><img src={ethereum} alt="ETH logo" height='100%' width='100%'/></a></div>
                <div class="DOGE donate-img"><a onClick={() => copyCryptoToClipboard(CRYPTOS.DOGE,process.env.REACT_APP_DOGECOIN_ADDRESS)}><img src={dogecoin} alt="DOGE logo" height='100%' width='100%'/></a></div>
                <div class="PRIVACY website-text"><a href='/privacy.html'>Privacy Policy</a></div>
                <div class="COPYRIGHT website-text"><a href='https://janhendrikewers.uk'>&#169; {moment().format('YYYY')} Jan-Hendrik Ewers</a></div>
                <div class="TOS website-text"><a href='/TOS.html'>Terms of Service</a></div>
            </div>
        </footer>)
    }
}
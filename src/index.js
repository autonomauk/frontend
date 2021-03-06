import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from "react-cookie";

import './base.scss';

const rootElement = document.getElementById("root");

const element = <CookiesProvider><App/></CookiesProvider>

if (rootElement.hasChildNodes()) {
  hydrate(element, rootElement);
} else {
  render(element, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import DefaultPage from './pages/DefaultPage/DefaultPage';
import FourOhFourPage from './pages/FourOhFourPage/FourOhFourPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={DefaultPage}/>
      <Route path="/*" component={FourOhFourPage}/>
    </Switch>
  </Router>
);

export default App;
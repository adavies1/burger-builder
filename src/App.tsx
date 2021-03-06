import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

type appState = {
  show: boolean
}

function App() {
  return (
    <BrowserRouter basename="burger-builder">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

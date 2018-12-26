import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import BurgerContainer from '../Burger/BurgerContainer/BurgerContainer';
import OrdersContainer from '../Orders/OrdersContainer';

import { RoutePaths } from '../constants/routePaths';
import CheckoutContainer from 'src/checkout/CheckoutContainer';

class MainContent extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={ true } path={ RoutePaths.root } component={ BurgerContainer }/>
        <Route exact={ true } path={ RoutePaths.orders } component={ OrdersContainer }/>
        <Route exact={ true } path={ RoutePaths.checkout } component={ CheckoutContainer }/>
      </Switch>
    );
  }
}

export default MainContent;
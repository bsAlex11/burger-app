import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import BurgerContainer from '../Burger/BurgerContainer/BurgerContainer';
import OrdersContainer from '../Orders/OrdersContainer';

import { RoutePaths } from '../constants/routePaths';

class MainContent extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route exact={ true } path={ RoutePaths.root } component={ BurgerContainer }/>
          <Route exact={ true } path={ RoutePaths.orders } component={ OrdersContainer }/>
        </Switch>
      </div>  
    );
  }
}

export default MainContent;
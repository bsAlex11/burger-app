import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Burger from '../Burger/Burger';
import Orders from '../Orders/Orders';

import { RoutePaths } from '../constants/routePaths';

class MainContent extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route exact={ true } path={ RoutePaths.root } component={ Burger }/>
          <Route path={ RoutePaths.orders } component={ Orders }/>
        </Switch>
      </div>  
    );
  }
}

export default MainContent;
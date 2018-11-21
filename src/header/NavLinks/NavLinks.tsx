import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { NavLink } from 'react-router-dom';

import { RoutePaths } from '../../constants/routePaths';
 
const NavLinks: React.SFC<InjectedIntlProps> = (props) => {
  const { intl } = props;

  return (
    <div>
      <NavLink to={ RoutePaths.root }>{ intl.formatMessage({ id: 'label.burger' }) }</NavLink>
      <NavLink to={ RoutePaths.orders }>{ intl.formatMessage({ id: 'label.orders' }) }</NavLink>
    </div>    
  )
}

export default injectIntl(NavLinks);
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import NavLinks from './NavLinks/NavLinks';
import image from '../assets/images/burger-logo.png';
import './Header.css';

const Header: React.SFC<InjectedIntlProps> = (props) => {
  const { intl } = props;

  return (
    <div className='headerContaienr'>
      <p>{ intl.formatMessage({ id:'label.menu' }) } </p>
      <div className='imageContainer'><img src={ image } alt='Logo'/></div>
      <NavLinks />
    </div>  
  );
}

export default injectIntl(Header);
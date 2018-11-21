import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

class Burger extends React.Component<InjectedIntlProps, {}> {
  public render () {
    console.log(this.props, 'from burger');
    return (
      <p>to be burger</p>
    )
  }
}

export default injectIntl(Burger);
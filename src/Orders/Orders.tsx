import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

class Orders extends React.Component<InjectedIntlProps, {}> {
  public render () {
    console.log(this.props, 'from orders');
    return (
      <p>to be orders aaaaaa</p>
    )
  }
}

export default injectIntl(Orders);
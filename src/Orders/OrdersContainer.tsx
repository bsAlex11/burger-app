import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

class OrdersContainer extends React.Component<InjectedIntlProps, {}> {
  public render () {
    return (
      <p>to be orders aaaaaa</p>
    )
  }
}

export default injectIntl(OrdersContainer);
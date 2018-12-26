import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

class OrdersContainer extends React.Component<InjectedIntlProps, {}> {
 public componentDidMount() {
    console.log('oreders');
    
  }

  public render () {
    console.log(this.props);
    return (
      <p>to be orders aaaaaa</p>
    )
  }
}

export default injectIntl(OrdersContainer);
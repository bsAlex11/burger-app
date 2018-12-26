import * as React from 'react';
import { ReactNode} from 'react';

class CheckoutContainer extends React.Component {

  public componentDidMount() {
    console.log("here");
  }

public render(): ReactNode {
  return (
    <div className="checkoutContainer">
      <p>here is checkout</p>
    </div>  
  );
  }
}

export default CheckoutContainer;
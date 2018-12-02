import * as React from 'react';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import { partial } from 'lodash';

import './BurgerControl.css';

interface IProps {
  type: string;
  amount: number;
  addIngredient: (type: string) => void;
  removeIngredient: (type: string) => void;
  intl: InjectedIntl;
}

const BurgerControl: React.SFC<IProps & InjectedIntlProps> = (props: IProps) => {
  const { type, amount, addIngredient, removeIngredient, intl } = props;

  return (
    <div className='controlContainer'>
      <button 
        className='BuildControl Less'
        onClick={ partial(removeIngredient, type) }
        disabled={ !amount }  
      >
        { intl.formatMessage({ id: 'label.less' }) }
      </button>
      <p className='infoContainer'>
        <span className='Label'>{ type }:</span>
        <span className='amount'>{ amount }</span>
      </p>
      <button 
        className='BuildControl More'
        onClick={ partial(addIngredient, type) }
      >
        { intl.formatMessage({ id: 'label.more' }) }
      </button>
    </div>
  );
}

export default injectIntl(BurgerControl);
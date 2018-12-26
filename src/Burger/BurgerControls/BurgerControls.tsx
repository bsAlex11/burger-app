import * as React from 'react';
import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';

import BurgerControl from './BurgerControl/BurgerControl';

import { IIngredients } from '../IBurgerInterfaces';

import './BurgerControls.css';

interface IProps {
  ingredients: IIngredients;
  addIngredient: (type: string) => void;
  removeIngredient: (type: string) => void;
  totalPrice: number;
  existingIngredients: boolean;
  toggleCheckoutPopUp: () => void;
  intl: InjectedIntl;
}

const BurgerControls: React.SFC<IProps & InjectedIntlProps> = (props: IProps) => {
  const { ingredients, addIngredient, removeIngredient, totalPrice,
    existingIngredients, toggleCheckoutPopUp, intl } = props;

  return (
    <div className='controlsContainer'>
      <div className='priceContainer'>
        <p>{ intl.formatMessage({ id: 'label.totalPrice' }) }<span>{ totalPrice.toFixed(2) }$</span></p>
      </div>  
      {
        ingredients && Object.keys(ingredients).map((ingredient: string, index: number) => {
          return <BurgerControl 
              type={ ingredient }
              key={ index }
              amount={ ingredients[ingredient] }
              addIngredient={ addIngredient }
              removeIngredient={ removeIngredient }
            />
        })
      } 
      <div className="orderButtonContainer">
        <button 
          disabled={ !existingIngredients } 
          className="orderBtn"
          onClick={ toggleCheckoutPopUp }
          >
            { intl.formatMessage({ id:"label.order" }) }    
        </button>
      </div>
    </div>  
  );
}

export default injectIntl(BurgerControls);
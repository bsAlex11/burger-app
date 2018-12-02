import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import Burger from '../Burger';
import BurgerControls from '../BurgerControls/BurgerControls';
import { axiosInstance } from '../../api/axiosConfig';

import { IBurgerState } from './../IBurgerInterfaces';

import './BurgerContainer.css';

class BurgerContainer extends React.Component<InjectedIntlProps, IBurgerState> {

  public state: IBurgerState = {
    ingredients: {
      salad: 2,
      cheese: 1,
      meat: 1,
      bacon: 2
    }
  }

  public componentDidMount() {

    axiosInstance.get('ingredients.json').then(response => {
      console.log(response);
    });
  }

  public addIngredientHandler: (type: string) => void = (type: string) => {

    this.setState((prevState: IBurgerState) => {
      const newValue = prevState.ingredients[type] + 1;
      const newIngredients = {...prevState.ingredients};
      newIngredients[type] = newValue;

      return {
        ingredients: newIngredients
      };
    })
  }

  public removeIngredientHandler: (type: string) => void = (type: string) => {
    if (this.state.ingredients[type] === 0) {
      return;
    }

    this.setState((prevState: IBurgerState) => {
      const newValue = prevState.ingredients[type] - 1;
      const newIngredients = {...prevState.ingredients};
      newIngredients[type] = newValue;

      return {
        ingredients: newIngredients
      };
    })
  }

  public render () {
    const { ingredients } = this.state;

    return (
      <div className="burgerContainer">
        <Burger ingredients={ ingredients } />
        <BurgerControls 
          ingredients={ ingredients } 
          addIngredient={ this.addIngredientHandler }
          removeIngredient={ this.removeIngredientHandler }
        />
      </div> 
    )
  }
}

export default injectIntl(BurgerContainer);
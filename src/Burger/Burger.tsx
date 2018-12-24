import * as React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import { IIngredients } from './IBurgerInterfaces';

import './Burger.css';
import { injectIntl, InjectedIntl } from 'react-intl';

interface IProps {
  ingredients: IIngredients;
  existingIngredients: boolean;
  intl: InjectedIntl
}

const Burger: React.SFC<IProps> = (props: IProps) => {
  const { ingredients, existingIngredients, intl } = props;

  return (
    <div className="burger">
      <div className="breadTop"/>
        { 
          existingIngredients ?
            ingredients && Object.keys(ingredients).length > 0 && Object.keys(ingredients).map((ingredient: string) => {
              return new Array(ingredients[ingredient]).fill(ingredient)
                .map((ingredientType: string, index: number) => {
                  return <BurgerIngredient
                    type={ ingredientType } 
                    key={ index + ingredientType } 
                  />
                });
            })
          :
          <p className="noIngredientsMessage">{ intl.formatMessage({ id: 'label.no_ingredients' }) }</p>
        }
      <div className="breadBottom" />
    </div>
  );
}

export default injectIntl(Burger);
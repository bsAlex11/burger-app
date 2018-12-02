import * as React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import { IIngredients } from './IBurgerInterfaces';

import './Burger.css';

interface IProps {
  ingredients: IIngredients;
}

const Burger: React.SFC<IProps> = (props: IProps) => {
  const { ingredients } = props;

  return (
    <React.Fragment>
      <div className="breadTop"/>
        {
          Object.keys(ingredients).map((ingredient: string) => {
            return new Array(ingredients[ingredient]).fill(ingredient)
              .map((ingredientType: string, index: number) => {
                return <BurgerIngredient
                  type={ ingredientType } 
                  key={ index + ingredientType } 
                />
              });
          })
        }
      <div className="breadBottom" />
    </React.Fragment>
  );
}

export default Burger;
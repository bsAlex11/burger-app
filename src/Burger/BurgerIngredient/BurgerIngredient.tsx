import * as React from 'react';

import { IBurgerIngredientProps } from '../IBurgerInterfaces';

import './BurgerIngredient.css';

const BurgerIngredient: React.SFC<IBurgerIngredientProps> = (props) => {
  const { type } = props;

  return (
    <div className={ `${type}` }/>
  )
}

export default BurgerIngredient;
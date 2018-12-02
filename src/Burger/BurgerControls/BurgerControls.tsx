import * as React from 'react';

import BurgerControl from './BurgerControl/BurgerControl';

import { IIngredients } from '../IBurgerInterfaces';

import './BurgerControls.css';

interface IProps {
  ingredients: IIngredients;
  addIngredient: (type: string) => void;
  removeIngredient: (type: string) => void;
}

const BurgerControls: React.SFC<IProps> = (props: IProps) => {
  const { ingredients, addIngredient, removeIngredient } = props;

  return (
    <div className='controlsContainer'>
      {
        Object.keys(ingredients).map((ingredient: string, index: number) => {
          return <BurgerControl 
              type={ ingredient }
              key={ index }
              amount={ ingredients[ingredient] }
              addIngredient={ addIngredient }
              removeIngredient={ removeIngredient }
            />
        })
      }
    </div>  
  );
}

export default BurgerControls;
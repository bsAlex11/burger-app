import * as React from 'react';
import { connect } from 'react-redux';

import Burger from '../Burger';
import BurgerControls from '../BurgerControls/BurgerControls';

import { fetchIngredients, addIngredientAction, removeIngredientAction } from '../../store/actions/ingredientsActions';

import { IBurgerState, IIngredients } from './../IBurgerInterfaces';

import './BurgerContainer.css';

interface IProps {
  getIngredients: () => void;
  ingredients: IIngredients;
  totalPrice: number;
  initAddIngredient: (ingredientName: string) => void;
  initRemoveIngredient: (ingredientName: string) => void;
}

class BurgerContainer extends React.Component<IProps, IBurgerState> {

  // public state: IBurgerState = {
  //   ingredients: {
  //     salad: 2,
  //     cheese: 1,
  //     meat: 1,
  //     bacon: 2
  //   }
  // }

  public componentDidMount() {
    this.props.getIngredients();
    // axiosInstance.get('ingredients.json').then(response => {
    //   console.log(response);
    // });
  }

  // public addIngredientHandler: (type: string) => void = (type: string) => {

  //   this.setState((prevState: IBurgerState) => {
  //     const newValue = prevState.ingredients[type] + 1;
  //     const newIngredients = {...prevState.ingredients};
  //     newIngredients[type] = newValue;

  //     return {
  //       ingredients: newIngredients
  //     };
  //   })
  // }

  // public removeIngredientHandler: (type: string) => void = (type: string) => {
  //   if (this.state.ingredients[type] === 0) {
  //     return;
  //   }

  //   this.setState((prevState: IBurgerState) => {
  //     const newValue = prevState.ingredients[type] - 1;
  //     const newIngredients = {...prevState.ingredients};
  //     newIngredients[type] = newValue;

  //     return {
  //       ingredients: newIngredients
  //     };
  //   })
  // }

  public render () {
    const { ingredients, totalPrice } = this.props;

    return (
      <div className="burgerContainer">
        <Burger ingredients={ ingredients } />
        <BurgerControls 
          ingredients={ ingredients } 
          addIngredient={ this.props.initAddIngredient }
          removeIngredient={ this.props.initRemoveIngredient }
          totalPrice={ totalPrice }
        />
      </div> 
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    ingredients: state.ingredientsSlice.ingredients,
    totalPrice: state.ingredientsSlice.totalPrice
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getIngredients: () => { dispatch(fetchIngredients()); },
    initAddIngredient: (ingredientName: string) => { dispatch(addIngredientAction(ingredientName)) },
    initRemoveIngredient: (ingredientName: string) => { dispatch(removeIngredientAction(ingredientName)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);
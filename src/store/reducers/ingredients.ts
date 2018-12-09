import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: {},
  totalPrice: 4
}

const IngredientPrices = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.3,
  bacon: 0.7
};

export const ingredientsReducer = (state = initialState, action: any) => {
  switch(action.type) {

    case actionTypes.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 4
      }

    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + IngredientPrices[action.ingredientName]
      }  

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - IngredientPrices[action.ingredientName]
      }  

    default: return state;
  }
}
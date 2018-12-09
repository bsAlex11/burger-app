import * as actionTypes from './actionTypes';

import { axiosInstance } from '../../api/axiosConfig';

const getIngredients = (ingredients: any ) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS,
    ingredients: ingredients
  }
}

export const addIngredientAction = (ingredientName: string) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredientName
  }
}

export const removeIngredientAction = (ingredientName: string) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName
  }
}

export const fetchIngredients = () => {
  return (dispatch: any) => {
    axiosInstance.get('ingredients.json').then(response => {
      dispatch(getIngredients(response.data));
    });
  }
}
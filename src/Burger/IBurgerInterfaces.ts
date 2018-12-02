export interface IBurgerIngredientProps {
    type: string;
} 

export interface IBurgerState {
    ingredients: IIngredients;
}

export interface IIngredients {
    salad: number;
    cheese: number;
    meat: number;
    bacon: number;
}
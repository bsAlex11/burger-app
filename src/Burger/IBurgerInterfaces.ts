export interface IBurgerIngredientProps {
    type: string;
} 

export interface IBurgerState {
    isCheckoutModalOpen: boolean;
}

export interface IIngredients {
    salad: number;
    cheese: number;
    meat: number;
    bacon: number;
}
import * as React from 'react';
import * as Modal from 'react-modal';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import Burger from '../Burger';
import BurgerControls from '../BurgerControls/BurgerControls';

import { fetchIngredients, addIngredientAction, removeIngredientAction } from '../../store/actions/ingredientsActions';

import { IBurgerState, IIngredients } from './../IBurgerInterfaces';
import { RoutePaths } from '../../constants/routePaths';

import './BurgerContainer.css';

interface IProps {
  getIngredients: () => void;
  ingredients: IIngredients;
  totalPrice: number;
  initAddIngredient: (ingredientName: string) => void;
  initRemoveIngredient: (ingredientName: string) => void;
  intl: InjectedIntl;
}

class BurgerContainer extends React.Component<IProps & InjectedIntlProps, IBurgerState> {

  public state: IBurgerState = {
    isCheckoutModalOpen: false
  }

  public componentDidMount() {
    this.props.getIngredients();
  }

  public checkIfIngredients: (ingredients: IIngredients) => boolean = (ingredients) => {
    const ingsValues = Object.keys(ingredients).map((ing: string) => {
      return ingredients[ing];
    });
    const value = ingsValues.some((elm: number) => {
      return elm > 0;
    });  
    if(value) {
      return true;
    } else {
      return false;
    }
  }

  public toggleCheckoutPopUp: () => void = () => {
    this.setState((prevState: IBurgerState) =>{
      return {
        isCheckoutModalOpen: !prevState.isCheckoutModalOpen
      }
    });
  }

  public render () {
    const { ingredients, totalPrice, intl } = this.props;
    const existingIngredients: boolean =  this.checkIfIngredients(ingredients);
    const modalStyles = {overlay: {zIndex: 10}};

    return (
      <div className="burgerContainer">
        <Burger 
          ingredients={ ingredients } 
          existingIngredients = { existingIngredients }
        />
        <BurgerControls 
          ingredients={ ingredients } 
          addIngredient={ this.props.initAddIngredient }
          removeIngredient={ this.props.initRemoveIngredient }
          totalPrice={ totalPrice }
          existingIngredients={ existingIngredients }
          toggleCheckoutPopUp={ this.toggleCheckoutPopUp }
        />
        <Modal
        style={ modalStyles }
          isOpen={ this.state.isCheckoutModalOpen }
          onRequestClose={ this.toggleCheckoutPopUp }
          ariaHideApp={ false }
          // className="checkoutModal"
          // overlayClassName="checkoutOverlay"
        >
          <div className="modalContent">
            <p className="modalHeader">
              { intl.formatMessage({ id:'label.checkout_message' }) }
            </p>  
            { 
              Object.keys(ingredients).map((ingredient: string) => {
                if(ingredients[ingredient] > 0) {
                  return <p key={ ingredient } className="ingredientContainer">
                          <span className="ingredient">{ intl.formatMessage({ id:`label.ingredient_${ ingredient }` }) }</span> 
                          <span className="ingAmount">{ ingredients[ingredient] }</span>
                        </p>
                }
                return null;
              })
            }
            <div className="checkoutButtonsContainer">
              <button onClick={ this.toggleCheckoutPopUp }>{ intl.formatMessage({ id: "label.cancel" }) }</button>
              <NavLink
                to={ RoutePaths.checkout } 
                className="toCheckout"
              >
                { intl.formatMessage({ id:'label.to_checkout' }) }
              </NavLink>
            </div>  
          </div>
        </Modal>  
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BurgerContainer));

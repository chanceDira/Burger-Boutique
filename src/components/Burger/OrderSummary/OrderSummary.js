import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";
//import { NavLink } from "react-router-dom";

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log("[OrderSummary] WillUpdate");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
    });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

            {/* <NavLink 
                                to="/checkout" 
                                exact
                            
                                // activeClassName="my-active"
                                // activeStyle={{
                                //     color: "#fa923f",
                                //     textDecoration: "underline"
                                // }}
                                ><Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button></NavLink> */}

        </Auxiliary>
    );
    }
    
};

export default OrderSummary;
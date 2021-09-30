import React, { Component } from "react";
import { Route } from 'react-router-dom'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux'


class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     price: 0
    // };

    // componentWillMount() {
    //     console.log("[Checkout] DidMount");
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
      
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
      
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCancelledHandler={this.checkoutCancelledHandler}
                    checkoutContinuedHandler={this.checkoutContinuedHandler}
                    />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)}
                    component={ContactData} />
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients    }
}

export default connect(mapStateToProps)(Checkout);
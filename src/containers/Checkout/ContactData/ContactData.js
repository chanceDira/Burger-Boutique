import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button"
import axios from "../../../axios-orders";
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients)
            //alert("You continue!");
            this.setState({ loading: true });
            const order = {
              ingredients: this.props.ingredients,
              price: this.props.totalPrice,
              customer: {
                name: "Chance Desire",
                address: {
                  street: "Kigali-Rwanda",
                  zipCode: "+250",
                  country: "Rwanda",
                },
                email: "chancedesire@gmail.com",
              },
              deliveryMethod: "Fastest",
            };

            
            axios
              .post("/orders.json", order)
              .then((response) => {
                console.log(response);
                this.setState({ loading: false });
                this.props.history.push('/');
              })
              .catch((error) => {
                console.log(error);
                this.setState({ loading: false });
              });
        
    }

    render() {
        let form = (
          <form>
            <input
              className={classes.Input}
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className={classes.Input}
              type="email"
              name="email"
              placeholder="Your Mail"
            />
            <input
              className={classes.Input}
              type="text"
              name="street"
              placeholder="Street"
            />
            <input
              className={classes.Input}
              type="text"
              name="postal"
              placeholder="Postal Code"
            />
            <Button btnType="Success" clicked={this.orderHandler}>
              ORDER
            </Button>
          </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
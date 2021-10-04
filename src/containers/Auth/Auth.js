import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                  type: 'email',
                  placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                  required: true,
                  isEmail: true
                },
                valid: false,
                touched: false
              },
              password: {
                elementType: 'input',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Password'
                },
                value: '',
                validation: {
                  required: true,
                  minLength: 6
                },
                valid: false,
                touched: false
              }
        }
    }

    render() {

        const fromElementsArray = [];
        for (let key in this.state.orderForm) {
          fromElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
          })
        }

        const form = fromElementsArray.map(formElement => (
            <Input key={formElement.id} />
        ))

        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}
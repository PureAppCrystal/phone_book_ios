import React, { Component } from 'react';
import PhoneForm from '../component/phone/PhoneForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/phoneInput';
import * as listActions from '../modules/phoneList';

class PhoneInputContainer extends Component { 
    id = 1;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        console.log("====== handleChange ======")
        //this.setState({ [e.target.name]: e.target.value });
        
        console.log(" e : ", e)
        console.log(" e.target : " , e.target)
        console.log(" e.target.name : " , e.target.name)
        console.log(" e.target.value : " , e.target.value)

        //const { name, number } = e.target;
        const { name, number } = { name: "aaa", number: 'bbb'}
        const { InputActions } = this.props;

        // this.setState({ [e.target.name]: e.target.value });
        InputActions.setInput({name, number});
    }

    handlerCreate = () => {
        const { InputActions, ListActions, name, number } = this.props;
        const phones = {
            id: this.getId(),
            name: name,
            number: number,
            checked: false
        }
        ListActions.insert(phones);
        InputActions.setInput({name: '', number: ''});
        
    }

    handlePressDown = (e) => {
        if(e.key === 'Enter') {
            this.handlerCreate();
          }
    }




    render() {
        const { name, number } = this.props;
        const { handleChange, handlerCreate, handlePressDown } = this;


        return (
            <PhoneForm
                onChange={handleChange}
                onCreate={handlerCreate}
                onKeyPress={handlePressDown}
                name={name}
                number={number}
            />
        )
    }
}

export default connect (
    (state) => ({
        name: state.phoneInput.get('name'),
        number: state.phoneInput.get('number')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        ListActions: bindActionCreators(listActions, dispatch),
    })
)(PhoneInputContainer)
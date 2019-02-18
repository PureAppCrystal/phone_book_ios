import React, { Component } from 'react';
import PhoneForm from '../component/phone/PhoneForm';
import PhoneSearch from '../component/phone/PhoneSearch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/phoneInput';
import * as listActions from '../modules/phoneList';

class PhoneInputContainer extends Component { 
    id = 2;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        console.log("====== handleChange[PhoneInputContainer] ======")
        //this.setState({ [e.target.name]: e.target.value });
        
        //console.log(" e : ", e)
        //console.log(" e.target : " , e.target)
        console.log(" e.target.name : " , e.target.name)
        console.log(" e.target.value : " , e.target.value)

        // param 1 개 예제
        // const { value } = e.target;
        // const { InputActions } = this.props;
        // InputActions.setInput(value);

        // 2개 시도
        const { InputActions } = this.props;
        InputActions.setInput({[e.target.name]: e.target.value}); // input 이름과 value  둘다 넘겨주었다.
        
        const target = e.target;
        const ee = e;

        console.log({'e':e, 'target':e.target});
        
        // InputActions.setInput(target); // input 이름과 value  둘다 넘겨주었다.
        
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
            <div>
            <PhoneForm
                onChange={handleChange}
                onCreate={handlerCreate}
                onKeyPress={handlePressDown}
                name={name}
                number={number}
            />
            <PhoneSearch/>
            </div>
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
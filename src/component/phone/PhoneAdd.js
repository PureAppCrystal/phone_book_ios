import React, { Component } from 'react';
import PhoneForm from 'component/phone/PhoneForm'
import './PhoneAdd.css'

class PhoneAdd extends Component {

    constructor(props) {
        super(props);

        console.log("====== PhoneAdd Constructor ======")
        console.log("props : ", props);
        const { name, number, onChange, onCreate, onKeyPress, history } =this.props;


                    /*        name = {name}
                      number = {number}
                      onChange = {handlerChange}
                      onCreate = {handlerCreate}
                      onKeyPress = {handleKeyPress}
                      history = {history}
                      */
    }

    render() {

        

        const {
            name,
            number,
            onChange,
            onCreate,
            onKeyPress,
            history
        } = this.props;

        return(
            <div className="phone-add">
                PhoneAdd
                <div className="header">
                    <button >뒤로</button>
                    <label> 새로운 연락처</label>
                    <button onClick={onCreate}> 완료 </button>
                </div>

                <PhoneForm 
                    name = {name}
                    number = {number}
                    onChange = {onChange}
                    onKeyPress = {onKeyPress}
                  
                />
            </div>
        )
    }
}

export default PhoneAdd;
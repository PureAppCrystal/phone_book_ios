import React from 'react';
import './PhoneForm.css';

const PhoneForm = ({ name, number, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="phone-form">
            <div className="input-box">
                <input 
                    type="text"
                    name="name" 
                    value = {name}
                    placeholder="이름을 입력하세요"
                    onChange ={onChange}
                    onKeyPress = {onKeyPress}
                    autoComplete="off"
                />
            </div>
            <div className="input-box">
                <input 
                    type="text"
                    name="number" 
                    value = {number}
                    placeholder="전화번호를 입력하세요"
                    onChange ={onChange}
                    onKeyPress = {onKeyPress}
                    autoComplete="off"
                />
            </div>

            {/*<div className="btnSave" onClick={onCreate}>저장</div>*/}
            <div className="btnSave" onClick={onCreate}>저장</div>
            
        </div>
    )

}

export default PhoneForm;
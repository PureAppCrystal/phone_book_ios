import React, {Component} from 'react';
import './PhoneList.css';
import Phone from 'component/phone/Phone';

class PhoneList extends Component {

    render() {
        const { phones, onRemove, onToggle } = this.props;

        const phoneList = phones.map(
            ( {id, name, number, checked}) => (
                <Phone 
                    key = {id}
                    id = {id}
                    name = {name}
                    number = {number}
                    checked = {checked}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                />
            )
        )
        return(
            <div>
                {phoneList}
    
            </div>
        )
    }
    
}


export default PhoneList;
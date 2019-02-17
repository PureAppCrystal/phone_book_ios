import React, {Component} from 'react';
import './PhoneList.css';
import Phone from 'component/phone/Phone';

class PhoneList extends Component {

    render() {
        const { phones, onRemove, onToggle } = this.props;

        const phoneList = phones.map(
            phones => (
                <Phone 
                    key = {phones.get('id')}
                    id = {phones.get('id')}
                    name = {phones.get('name')}
                    number = {phones.get('number')}
                    checked = {phones.get('checked')}
                    onRemove = {() => onRemove(phones.get('id'))}
                    onToggle = {() => onToggle(phones.get('id'))}
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
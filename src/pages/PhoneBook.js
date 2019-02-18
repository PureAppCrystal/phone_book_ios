import React, { Component } from 'react';
import PhoneBookTemplate from 'component/phone/PhoneBookTemplate';
import PhoneForm from 'component/phone/PhoneForm'
import PhoneSearch from 'component/phone/PhoneSearch'
import PhoneList from 'component/phone/PhoneList'
import PhoneAdd from 'component/phone/PhoneAdd';
import queryString from 'query-string';
import PhoneInputContainer from '../containers/PhoneInputContainer';
import PhoneListContainers from '../containers/PhoneListContainers';



class PhoneBook extends Component {
    render() {
      const { location, history } = this.props;
      const query = queryString.parse(location.search);
      return ( 
        <PhoneBookTemplate
          history = {history}
        >
          <PhoneInputContainer/>
          <PhoneListContainers/>
        </PhoneBookTemplate>
      )
    }
}


export default PhoneBook;
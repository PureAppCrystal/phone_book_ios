import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, PhoneBook } from 'pages';
import Menu from 'component/common/Menu'
import 'App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/phonebook" component={PhoneBook}/>*/}
        {/*<Route path="/phonebook/:id" component={PhoneBook}/>*/}
        {/*<Route path="/phonebook/:param" render={
          props => <PhoneBook {...props.match.params}/>
        }/>*/}
        
        {/*<Route path="/phonebook/:param" component={PhoneBook}/>*/}
        <Route exact path="/phonebook" component={PhoneBook}/>
        


        <Route exact path="/phonebook/:param" render={
          props => <PhoneBook {...props}/>
        }/>
        
          
        

      </div>
    )
  }
}

export default App;

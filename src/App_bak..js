import React, { Component } from 'react';
import PhoneBookTemplate from 'component/PhoneBookTemplate'
import PhoneForm from 'component/PhoneForm';
import PhoneList from 'component/PhoneList';
import Search from 'component/Search';
import 'App.css';

class App extends Component {

  constructor () {
    super();
    this.id = 3;

    this.state = {
      name: "",
      number: "",
      phones: [
        { id: 0, name: '리액트1', number: "02-1234-1234", checked: false},
        { id: 1, name: '리액트2', number: "02-1234-1234", checked: false},
        { id: 2, name: '리액트3', number: "02-1234-1234", checked: false}
      ]

    }
  }

  // inputChangeEvent
  handlerChange= (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlerCreate = (e) => {
    const message = this.formValid(e);
    if ( message !== "" ){
      alert("다음 항목을 입력하세요 : "+ message )
      return false;
    }

    const {name, number, phones} = this.state;

    this.setState({
      name: '',
      number: '',
      phones: phones.concat({
        id: this.id++,
        name: name,
        number: number,
        checked: false
      })
    })
  }

  handlerRemove = (id) => {
    const { phones } = this.state;
    this.setState({
      phones: phones.filter(phones => phones.id !== id)
    })
  }

  handleToggle = (id) => {
    const { phones } = this.state;

    const index = phones.findIndex(phones => phones.id === id);
    const selected = phones[index];
    const nextPhones =[...phones];
    
    // 선택된 연락처 외에 checked false 
    nextPhones.map(item => {
      if ( item.id !== id) {item.checked= false}
    })


    nextPhones[index] = {
      ...selected,
      //checked: !selected.checked
      checked: !selected.checked
    };

    this.setState({
      phones: nextPhones
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handlerCreate();
    }
  }

  formValid = (e) => {
    let message = "";
    const {name, number} = this.state;
    const cName = name;
    const cNumber = number;

    if (cName === '' ) {
      console.log("name is empty")
      message += "[이름]"
    }

    if (cNumber === '' ) {
      console.log("number is empty")
      message += "[번호]"
    }

    return message;
  }

  render() {

    const { name, number, phones } = this.state;
    const {
      handlerChange,
      handlerCreate,
      handlerRemove,
      handleToggle,
      handleKeyPress,
    } = this;


    return (
      <div className="App">
        <PhoneBookTemplate 
          form={
            <PhoneForm
              name = {name}
              number = {number}
              onChange = {handlerChange}
              onCreate = {handlerCreate}
              onKeyPress = {handleKeyPress}
            />
          }

          searchForm={
            <Search/>
          }
        >
          

          <PhoneList phones={phones} onRemove={handlerRemove} onToggle={handleToggle}/>
        </PhoneBookTemplate>
      </div>
    );
  }
}

export default App;

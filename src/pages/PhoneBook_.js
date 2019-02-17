import React, { Component } from 'react';
import PhoneBookTemplate from 'component/phone/PhoneBookTemplate';
import PhoneForm from 'component/phone/PhoneForm'
import PhoneSearch from 'component/phone/PhoneSearch'
import PhoneList from 'component/phone/PhoneList'
import PhoneAdd from 'component/phone/PhoneAdd';
import queryString from 'query-string';



class PhoneBook extends Component {
    constructor (props) {
        super(props);
        this.id = 3;




        this.state = {
          
          name: "",
          number: "",
          phones: [
            { id: 0, name: '리액트1', number: "02-1234-1234", checked: false},
            { id: 1, name: '리액트2', number: "02-1234-1234", checked: false},
            { id: 2, name: '리액트3', number: "02-1234-1234", checked: false}
          ],
          srcCnt: 0,
          srchValue: "",
          srchPhones: []    
        }
      }


      handlerOnSearch = (e) => {
        console.log("onSearch")
        
        this.setState({ [e.target.name]: e.target.value });

        console.log("DD : ", e.target.value )
        // 빈칸체크를 할꺼고
        if (e.target.value === "" ) {
          console.log("search is empty")
          return;
        }

        // 입력받아
        const   srchValue  = e.target.value;
        console.log("==========================", srchValue);
        
        // map 돌려서 포함된걸 srchPhones 에 추가해.
        this.setState({
          srchPhones: this.state.phones.filter(
            (phone) => phone.name.search(srchValue) >= 0 
          )

        })

        // phones 에 setState 해줘.



      }

      componentDidUpdate(a,b,c){
      }
      
      getSnapshotBeforeUpdate(a,b,c){
        

      }
    
      // inputChangeEvent
      handlerChange= (e) => {
        console.log("====== handlerChange ======")
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handlerCreate = (e) => {
        console.log("====== handlerCreate ======")
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

        console.log("state : ", this.state)

        
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
    
        const { name, number, phones, srchPhones, srchValue } = this.state;
        const {
          handlerChange,
          handlerCreate,
          handlerRemove,
          handleKeyPress,
          handleToggle,
          handlerOnSearch,
        } = this;


        let  resultList 
        // if ( this.state.srchValue !==""  ) {
        //   resultList = srchPhones
        // } else {
        //   resultList = phones;
        // }

        //resultList = (this.state.srchValue !=="") ? srchPhones : phones; 


        
        ///////////////////////////////////////////////////////
        //const { param } = this.props;

        console.log("this.props : ", this.props);

        // match 파라메터 가져오기
        const { param } = this.props.match.params;
        console.log("param : " , param);

        // location, history 정보 가져오기 
        const { location, history } = this.props;
        const query = queryString.parse(location.search);
        console.log("query : " , query);
        console.log("history : ", history);

        if(param=='add'){
            return(
                <div>
                    <PhoneAdd
                      name = {name}
                      number = {number}
                      onChange = {handlerChange}
                      onCreate = {handlerCreate}
                      onKeyPress = {handleKeyPress}
                      history = {history}
                    />
                </div>
            )
        }
    
        return (
            
          <div className="App">
            {/**
            <button onClick={()=>{
                history.push('/phonebook/abc?a=b&b=c');
            }}> history.push </button>
             */}
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
                <PhoneSearch
                    onSearch={handlerOnSearch}
                />
              }

              history = {history}
            >
              
    
              {/*<PhoneList phones={resultList} onRemove={handlerRemove} onToggle={handleToggle}/>*/}
              <PhoneList phones={(srchValue !== "" ) ? srchPhones : phones } onRemove={handlerRemove} onToggle={handleToggle}/>
              
            </PhoneBookTemplate>
          </div>
        );
      }
}


export default PhoneBook;
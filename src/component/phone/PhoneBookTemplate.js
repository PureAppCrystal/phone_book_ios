import React from 'react'
import { Link } from 'react-router-dom'
import './PhoneBookTemplate.css'


const PhoneBookTemplate = ({form, searchForm, children, history}) => {
    const goBack = history.goBack;
    return (
        <div className="template">
            <div className="header">
                <button onClick={goBack}>뒤로</button>
                <label>연락처</label>
                <Link to="/phonebook/add">추가</Link>
            </div>


            {/**
            <Route exact path="/phonebook/:param" render={
                props => <PhoneBook {...props}/>
                }/>
             */}

            

            <section className="input-form">
                {/*{form}*/}
                {form}
            </section>

            <section className="search-form">
                {searchForm}
            </section>
                
            <section className="list">
                {children}
            </section>

            
        </div>
    )
}


export default PhoneBookTemplate;
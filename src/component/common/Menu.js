import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const activeStyle = {
        color: 'green',
    }


    return (
        <div className="common-menu">
            <ul>
                {/*
                <li><Link to="/">홈</Link></li>
                <li><Link to="/phonebook">연락처</Link></li>
                */}
                <li><NavLink exact to="/" activeStyle={activeStyle} >홈</NavLink></li>
                <li><NavLink exact to="/phonebook" activeStyle={activeStyle} >연락처</NavLink></li>


            </ul>
        </div>
    )
}

export default Menu;
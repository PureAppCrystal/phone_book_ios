import React, { Component } from 'react';
import './Phone.css';

class Phone extends Component {
    
    render() {
        const { id, name, number, checked, onRemove, onToggle } = this.props;
//        className={`contact ${checked && 'checked'}`} onClick={()=>onToggle(id)}>
        return(
            <div className={`phone ${checked && 'checked'}`} onClick={ ()=>onToggle(id)} >
                {/*<div className="desc">이름</div>*/}
                <div className="content">{name}</div>
                {/*
                <div className="desc">번호</div>
                <div className="content">{number}</div>
                 */}
                <div className="btnRemove" onClick={ (e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}> <label>삭제</label></div>
            </div>
        )
    }
}

export default Phone;
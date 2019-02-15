import React from 'react';
import './PhoneSearch.css'


const PhoneSearch = ( { onSearch }) => {
    return(
        <div className="srch-form">
            <input 
                name="srchValue"
                placeholder="이름으로 검색하세요"
                autoComplete="off"
                onChange={onSearch}
            />
        </div>
    )
}

export default PhoneSearch;
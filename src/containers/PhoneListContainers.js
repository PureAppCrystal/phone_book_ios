import React, { Component } from 'react';
import PhoneList from '../component/phone/PhoneList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listActions from '../modules/phoneList';

class PhoneListContainer extends Component {
    handleToggle = (id) => {
        const { ListActions } = this.props;
        ListActions.toggle(id);
    }

    handleRemove = (id) => {
        const { ListAtions } = this.props;
        ListAtions.remove(id);
    }


    render() {
        const { phones } = this.props;
        const { handleToggle, handleRemove } = this;
        return (
            <PhoneList
                phones={phones}
                onClick={handleToggle}
                onRemove={handleRemove}
            />
        )
    }
}

export default connect(
    (state) => ({
        phones: state.phoneList
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(PhoneListContainer)
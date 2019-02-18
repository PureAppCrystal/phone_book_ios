import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'phoneList/INSERT';
const TOGGLE = 'phoneList/TOGGLE';
const REMOVE = 'phoneList/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id: 0,
        name: "연락처1",
        number: "010-1234-0001",
        checked: false
    }),
    Map({
        id: 1,
        name: "연락처2",
        number: "010-1234-0002",
        checked: false
    }),
    Map({
        id: 2,
        name: "연락처3",
        number: "010-1234-0003",
        checked: false
    })
])


const beforeLog = (actionType, state, action) => {
    console.log("====== Action[phoneInput/"+actionType+"] ======")
    console.log("action.payload : ", action.payload )
    console.log("before state : ", state)
}

const afterLog = (state) => {
    console.log("after state : ", state)
    return state;
}

export default handleActions({
    [INSERT]: (state, action) => {
        beforeLog(INSERT, state, action);
        const { id, name, number, checked } = action.payload;
        const tempState = state.push(Map({
            id,
            name,
            number,
            checked
        }))

        return afterLog(tempState);
    },
    [TOGGLE]: (state, action) => {
        beforeLog(INSERT, state, action);
        const { payload: id } = action;

        const index = state.findIndex(phones => phones.get('id') === id );
        const tempState = state.updateIn([index, 'checked'], checked => !checked)
        
        return afterLog(tempState);
    },
    [REMOVE]: (state, action) => {
        beforeLog(INSERT, state, action);
        const { payload: id } = action;

        const index = state.findIndex(phones => phones.get('id') === id );
        const tempState = state.delete(index);
        
        return afterLog(tempState);
    }

}, initialState)
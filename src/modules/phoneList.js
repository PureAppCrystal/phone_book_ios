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

export default handleActions({
    [INSERT]: (state, action) => {
        const { id, name, number, checked } = action.payload;

        return state.push(Map({
            id,
            name,
            number,
            checked
        }))
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action;

        const index = state.findIndex(phones => phones.get('id') === id );
        return state.updateIn([index, 'checked'], checked => !checked)
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;

        const index = state.findIndex(phones => phones.get('id') === id );
        return state.delete(index);
    }

}, initialState)
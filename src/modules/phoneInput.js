import { Map, List, FromJS} from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const SET_INPUT = 'phoneInput/SET_INPUT';

// 액션 생성 함수 만들기
export const setInput = createAction(SET_INPUT);

// 초기 상태 정의
const initialState = Map({
    name: '',
    number: ''
})

// 리듀서 정의 
export default handleActions({
    [SET_INPUT] : (state, action) => {
        console.log("action : ", action)
        console.log("state : ", state)
        const { name, number } = action;
        return state.set('name', name)
                    .set('number', number)
        
    }
}, initialState);
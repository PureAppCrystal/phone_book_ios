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
        console.log("====== Action[phoneInput/SET_INPUT] ======")
        //console.log("action : ", action)
        console.log("action.payload : ", action.payload )
        console.log("before state : ", state._root.entries)
        //const { name, number } = action.payload;
        //console.log(" name : ", name, ", number : ", number)
        //return state.set('name', action.payload).set('number', action.payload)
        //const temp = state.merge({name: action.payload.name, number: action.payload.number})
        
        //return temp

        // 1개 예제
        // const temp = state.set('name', action.payload) // action.payload : dd(value)
        // console.log('temp : ', temp)  // state.root.entries[0] = ["name", "dd"]
        // return temp;

        // 2개 시도
        // const temp = state.set('name', action.payload.name).set('number', action.payload.number) 
        // console.log('temp : ', temp)  
        // return temp;

        
        let newState = null;
        if (action.payload.name !== undefined ) {
            newState = state.set('name', action.payload.name)
        } 
        if ( action.payload.number !== undefined) {
            newState = state.set('number', action.payload.number)
        }
        // 둘다 빈값일때..
        if ( action.payload.number !== undefined && action.payload.number !== undefined) {
            newState = state.set('name', action.payload.name).set('number', action.payload.number)
        }

        console.log("after state : ", newState._root.entries);
        return newState;

        
                    
        
    }
}, initialState);
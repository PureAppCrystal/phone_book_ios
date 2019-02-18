import { Map, List, FromJS} from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const SET_INPUT = 'phoneInput/SET_INPUT';

// 액션 생성 함수 만들기
export const setInput = createAction(SET_INPUT);

// 초기 상태 정의
const initialState = Map({
    name: '',
    number: '',
    target: {}
})

// 리듀서 정의 
export default handleActions({
    [SET_INPUT] : (state, action) => {
        console.log("====== Action[phoneInput/SET_INPUT] ======")
        console.log("action : ", action)
        console.log("action.payload : ", action.payload )
        console.log("before state ori : ", state)
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


        let newState = initialState;

        // for ( var key in  action.payload ) {
        //     console.log("key : ", key)
        //     console.log("action.payload[key] : ", action.payload[key])
        //     console.log("newState [f] : ", newState);
            
        // }

        //newState = newState.set(key,  action.payload[key]);

        //console.log("ddd : ", Object.keys(action.payload))

        // let jsonKey = Object.keys(action.payload);
        // let keyLength = jsonKey.length();

        // newState.set(key[0], action.payload[key[0]])
                        //    .set()
        //state.set(key, action.payload[key]);

        const temp = action.payload
        console.log("=======================================")
        console.log("temp : ", temp)
        console.log("temp.keys : ", temp.keys)
        console.log("Object.keys(temp) : ", Object.keys(temp))
        console.log("Object.keys(temp)[0] : ", Object.keys(temp)[0])
        console.log("action.payload[Object.keys(temp)] : ", action.payload[Object.keys(temp)])
        console.log("=======================================")

        // 지금 keys 로 받아오는것은 배열이기때문에 비구조할당이 되지 않는다.
        newState = state.set(temp.keys, action.payload[Object.keys(temp)])
        console.log("newState : ", newState);





        // newState = state.set(jsonKey, action.payload[jsonKey]);
        // newState = state;


        // if (action.payload.name !== undefined ) {
        // } 
        // if ( action.payload.number !== undefined) {
        //     newState = state.set('number', action.payload.number)
        // }
        // // 둘다 빈값일때..
        // if ( action.payload.name !== undefined && action.payload.number !== undefined) {
        //     console.log("?????")
        //     newState = state.set('name', action.payload.name).set('number', action.payload.number)
        // }

        console.log("after state : ", newState._root.entries);
        return newState;

        
                    
        
    }
}, initialState);
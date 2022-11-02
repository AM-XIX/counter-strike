import {SET_MESSAGE} from './constants/actions';

export default store => next => action => {

    // déterminer nb premier
    function isPrime(num) {
        for(var i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }
     
    const state = store.getState(); 

    // console.log("before", state);
    const returnAction = next(action);
    // console.log("after", store.getState());
    const count = state.counter.value;
    // console.log("count", count);

    if(isPrime(count)){
        console.log(state.counter.value);
        // store.dispatch({type: SET_LOG, payload: "⭐"});
        console.log(action.type);
        // store.dispatch({type: SET_MESSAGE, payload: "⭐"});
    }
    
    return returnAction ;
}
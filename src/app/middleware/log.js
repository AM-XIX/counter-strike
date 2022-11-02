import {SET_MESSAGE} from './constants/actions';

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

export default store => next => action => {   
     
    const state = store.getState(); 

    // console.log("before", state);
    const returnAction = next(action);
    // console.log("after", store.getState());
    const count = state.counter.value;
    // console.log("count", count);

    if(isPrime(count)){
        console.log(state.counter.value);
        // store.dispatch({type: SET_MESSAGE, payload: ' *'});
        console.log(state.counter.message);
    } else {
        // store.dispatch({type: SET_MESSAGE, payload: ' '});
    }

    return returnAction ;
}
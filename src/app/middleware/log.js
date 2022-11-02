import {SET_LOG} from './constants/actions';

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

    if(isPrime(count) && action.type !== SET_LOG){
        alert("Le nombre " + count + "est premier");
        console.log(count + "premier");
        // store.dispatch({type: SET_LOG, payload: count + "start"});
        // const { count : countLog } = store.getState().log;
        // store.dispatch({ type : SET_LOG, date : (new Date()).toString(), count : countLog+"star" })
        // console.log(store);

    }
    
    return returnAction ;
}
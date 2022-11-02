// import { SET_MESSAGE } from './constants/actions';
import { setStar } from '../../features/counter/counterSlice';

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

export default store => next => action => {

    const state = store.getState();
    store.dispatch(setStar(' '));
    // console.log("before", state);
    const returnAction = next(action);
    // console.log("after", store.getState());
    const count = state.counter.value;
    // console.log("count", count);

    if (isPrime(count) && action.type !== 'counter/setStar') {
        console.log(state.counter.value);
        store.dispatch(setStar('*'));
    } else if (action.type !== 'counter/setStar') {
        store.dispatch(setStar('-'));
    }

    return returnAction;
}
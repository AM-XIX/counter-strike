// import { SET_MESSAGE } from './constants/actions';
import { setStar } from '../../features/counter/counterSlice';

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

export default store => next => action => {

    const state = store.getState();

    // console.log("before", state);
    const returnAction = next(action);
    // console.log("after", store.getState());
    const count = state.counter.value;
    // console.log("count", count);

    if (isPrime(count)) {
        console.log(state.counter.value);
        store.dispatch(setStar('*'));
    } else {
        store.dispatch(setStar(' '));
    }

    return returnAction;
}
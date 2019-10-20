
//types

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const SET_INITIAL_STATE = "SET_INITIAL_STATE"
export const CHANGE_COMPLETION = "CHANGE_COMPLETION"

//action creator
let nextId = 4
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
        nextId: nextId++
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}

export function setInitialState(state) {
    return {
        type: SET_INITIAL_STATE,
        state
    };
}

export function changeCompletion(id) {
    return {
        type: CHANGE_COMPLETION,
        id
    }
}

//component

// let prod = {};

// this.dispatch(addTodo(prod));
// this.dispatch({ type: ADD_TODO, prod });

//end component
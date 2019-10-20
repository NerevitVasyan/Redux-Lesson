import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import { reducer } from './app/reducers/reducer';
import { setInitialState, addTodo, removeTodo } from './app/actions/actions';
import { Provider } from 'react-redux';
import App from './app/components/app';

let store = createStore(reducer);

// let obj1 = { name: "Basyan" };
// let obj2 = { ...obj1 };
// obj2.name = "Petro";
// console.log(obj1);

// let obj1 = { name: "Basyan" };
// let obj2 = { age: 22}
// Object.assign(obj2,obj1);
// console.log(obj2);
// obj2.name = "Petro";
// console.log(obj1);

// let obj1 = { name: "Basyan", age: 22 };
// let obj2 = Object.assign({}, obj1, { name: obj1.name });
// console.log(obj2);

let todos = [
    { id: 1, description: "Buy food", isCompleted: true },
    { id: 2, description: "Buy some meds", isCompleted: false },
    { id: 3, description: "Do homework", isCompleted: false },
]
// console.log(todos);
// console.log(...todos);

let state = {
    todos: todos,
    token: "YOURTOKEN"
};


store.dispatch(setInitialState(state));
//store.dispatch({ type: "SET_INITIAL_STATE", todos });

// console.log("---set initial---");
// console.log(store.getState());

// store.dispatch(addTodo({ id: 4, description: "learn react", isCompleted: false }));

// console.log("---add todo---");
// console.log(store.getState());

// console.log("---remove todo---");
// store.dispatch(removeTodo(2));

// console.log(store.getState());

// tut startue react

//let element = <h1>{1 + 1}</h1>

ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'));
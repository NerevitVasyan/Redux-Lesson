import { 
    ADD_TODO, 
    REMOVE_TODO, 
    SET_INITIAL_STATE,
    CHANGE_COMPLETION } from '../actions/actions';

// state = {
//     todos: [{},{}]
// }

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            // let temp = Object.assign({}, state);
            // temp.todos.push(action.todo)
            // return temp;
            action.todo.id=action.nextId;
            return Object.assign({}, state, {
                todos: [...state.todos, action.todo]
            });
        case REMOVE_TODO:
            return Object.assign({},state,{
                todos: state.todos.filter(x=>x.id!==action.id)
            })
        case CHANGE_COMPLETION:
            return Object.assign({},state,{
                todos: state.todos.map(i=>{
                    if(i.id===action.id){
                        i.isCompleted = !i.isCompleted;
                    }
                    return i;
                })
            })
        case SET_INITIAL_STATE:
            return Object.assign({}, action.state);
        default:
            return state;
    }
}
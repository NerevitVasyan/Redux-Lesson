import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo,changeCompletion } from '../actions/actions';

class TodoItem extends Component {

    changeCompleted = () => {
        this.props.dispatch(changeCompletion(this.props.item.id));
    }

    render() {
        const { item } = this.props;
        return (
            <div onClick={this.changeCompleted} style={{ padding: "5px", background: item.isCompleted ? "green" : "white" }} >
                <div>{item.id}</div>
                <div>{item.description}</div>
                <div>{item.isCompleted}</div>
            </div>
        );
    }
}

class AddItem extends Component {

    addTodoItem = () => {
        let item = {
            id: 6,
            description: this.refs.desc.value,
            isCompleted: false
        };

        this.props.dispatch(addTodo(item));
    }

    render() {
        return (
            <div style={{padding:"5px", border: "2px solid black"}}>
                <input ref="desc" ></input>
                <button onClick={this.addTodoItem}>Add</button>
            </div>
        );
    }
}

class App extends Component {

    render() {
        console.log(this.props);
        //this.props.dispatch({type:"REMOVE_TODO",id:3});
        const todos = this.props.todos;
        return (
            <div>
                <AddItem dispatch={this.props.dispatch} />
                {todos.map(item =>
                    <TodoItem key={item.id} item={item} dispatch={this.props.dispatch} />
                )}
                
            </div>
        );
    }
}

// Шо іменно тягнути зі стора
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(App);
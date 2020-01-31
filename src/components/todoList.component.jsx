import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../reducers/reducer.js';
import TodoItem from './todoItem.component.jsx';

const TodoList = () => {

    const [state, dispatch] = useReducer( reducer, initialState );

    const [newItem, setNewItem] = useState({
        item: '',
        completed: false,
        id: Date.now()
    });

    const handleChanges = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem});
        setNewItem({
            item: '',
            completed: false,
            id: Date.now()
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    placeholder="add new item"
                    value={newItem.item}
                    onChange={(e)=> handleChanges(e)}
                />
                <button>submit</button>
            </form>

            { state.map( item => 
                <TodoItem item={item} />
            )}
            
        </div>
    )
}

export default TodoList;
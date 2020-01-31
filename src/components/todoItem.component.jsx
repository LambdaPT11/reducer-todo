import React from 'react';

const TodoItem = (props) => {

    const toggle = () => {
        props.dispatch({ type: 'TOGGLE', payload: props.item })
    }

    return(
        <div tabIndex='0' className={ `item ${props.item.completed ? 'completed' : '' }` }
            style={{ textDecoration: props.item.completed ? 'line-through' : '' }}
            onClick={toggle}
            onKeyDown={ (e) => {if (e.keyCode === 32) { toggle() }}} >
            <h3>{props.item.item}</h3>
        </div>
    )
}

export default TodoItem;


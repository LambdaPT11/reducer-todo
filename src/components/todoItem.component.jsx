import React from 'react';

const TodoItem = (props) => {
    return(
        <div>
            <h3>{props.item.item}</h3>
        </div>
    )
}

export default TodoItem;


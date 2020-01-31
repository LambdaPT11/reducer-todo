

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Make Sweet Tea',
        completed: false,
        id: 3892987590
    }
]

export const reducer = (state, action) => {
    switch ( action.type ) {
        case 'ADD_ITEM':
            return [...state,
            {
                item: action.payload.item,
                completed: false,
                id: Date.now()
            }];
            case 'TOGGLE':
                return state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    else {
                        return item;
                    }
                })
            case 'CLEAR_COMPLETE':
                return state.filter((item => !item.completed));
        default:
            return state;
    }
    
}
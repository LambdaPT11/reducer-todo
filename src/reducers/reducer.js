

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
        default:
            return state;
    }
    
}
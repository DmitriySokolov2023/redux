const defaultValue = {
    customers:[]
}
export const customerReducer = (state = defaultValue, action) =>{
    switch (action.type){
        case ('ADD_CUSTOMER'):
            return {...state, cash: state.cash + action.payload}
        case ('GET_CUSTOMER'):
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
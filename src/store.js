import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

// Action Types 
const USER_SET = 'USER_SET'

// Action Creators
const userSet = users => ({
    type: USER_SET,
    users
})

// Thunk Creator
export const fetchUsers = () => async dispatch => {
    const response = await axios.get('/api/users')
    const users = response.data
    console.log(users)
    dispatch(userSet(users))
}

// Reducer
const initialState = {
    users: [],
}

// :: (State, Action) -> State
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET:
            console.log(action)
            return { users: action.users }
        default:
            return state
    }
}

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

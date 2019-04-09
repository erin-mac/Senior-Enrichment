import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

// Action Types 
const SET_MANAGERS = 'SET_MANAGERS'
const SET_PRODUCTS = 'SET_PRODUCTS'

// Action Creators
const setManagers = managers => ({
    type: SET_MANAGERS,
    managers
})

const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

// Thunk Creators
export const fetchManagers = () => async dispatch => {
    const response = await axios.get('/api/managers')
    const managers = response.data
    //console.log(managers)
    dispatch(setManagers(managers))
}

export const fetchProducts = () => async dispatch => {
    const response = await axios.get('/api/products')
    const products = response.data
    //console.log(products)
    dispatch(setProducts(products))
}

export const checkManager = () => async dispatch => {
    const response = await axios.get('/api/products')
    const products = response.data
    products.map(product => { if (product.managerId === null) { return false } })
}

export const updateManager = (newManager) => async dispatch => {
    await axios.put('api/products/:id', newManager)
    const response = await axios.get(manager, '/api/products')
    const products = response.data
    dispatch(setProducts(products))
}

// Reducer
const initialState = {
    managers: {},
    products: {}
}

// :: (State, Action) -> State
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANAGERS:
            return { ...state, managers: action.managers }
        case SET_PRODUCTS:
            return { ...state, products: action.products }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

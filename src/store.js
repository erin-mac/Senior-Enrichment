import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'


// Action Types 
const SET_STUDENTS = 'SET_STUDENTS'
const SET_CAMPUSES = 'SET_CAMPUSES'

// Action Creators
const setStudents = students => ({
    type: SET_STUDENTS,
    students
})

const setCampuses = campuses => ({
    type: SET_CAMPUSES,
    campuses
})

// Thunk Creators
export const fetchStudents = () => async dispatch => {
    try {
        const response = await axios.get('api/students')
        const students = response.data
        return dispatch(setStudents(students))
    } catch (error) { console.log(error) }
}

export const fetchCampuses = () => async dispatch => {
    try {
        const response = await axios.get('api/campuses')
        const campuses = response.data
        return dispatch(setCampuses(campuses))
    } catch (error) { console.log(error) }
}

export const addCampus = (newCampus) => async dispatch => {
    try {
        console.log('hit route')
        const response = await axios.put('api/campuses/addCampuses', newCampus)
        console.log('Campus added')
        //const newCampus = response.data
        return dispatch(setCampuses(campuses))
    } catch (error) { console.log(error) }
}

// Reducer
const initialState = {
    students: [],
    campuses: []
}

// :: (State, Action) -> State
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return { ...state, students: action.students }
        case SET_CAMPUSES:
            return { ...state, campuses: action.campuses }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../store'

const NewStudent = (props) => {

    const newStudent = {
        firstName: '',
        lastName: '',
        email: ''
    }

    const handleChange = (ev) => {
        ev.preventDefault()
        newStudent[ev.target.name] = ev.target.value
        console.log(newStudent)
    }

    const handleSubmit = (ev) => {
        props.addStudent(newStudent)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                    First Name:
    <input type="text" name="firstName" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Last Name:
    <input type="text" name="lastName" onChange={handleChange} />
                </label>
            </div>

            <div className="form-group">
                <label>
                    Email:
    <input type="text" name="email" onChange={handleChange} />
                </label>
            </div>
            <input type="submit" value="Submit" />

        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStudent: (student) => dispatch(addStudent(student))
    }
}

export default connect(null, mapDispatchToProps)(NewStudent)
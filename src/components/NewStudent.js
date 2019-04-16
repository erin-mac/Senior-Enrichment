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

    }

    const handleSubmit = (ev) => {
        props.addStudent(newStudent)
    }

    const campuses = props.campuses || []

    return (
        <div>
            <h4>Enter new student information below:</h4>
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

                <div className="form-group">
                    <label> Campus:
                        <select value='campus' name='campusId' onChange={handleChange} >
                            <option value=''>--select campus--</option>
                            {campuses ? campuses.map(
                                campus => { return <option key={campus.id} value={campus.id}>{campus.name}</option> }) : null}
                        </select>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStudent: (student) => dispatch(addStudent(student))
    }
}
const mapStateToProps = state => {
    return { campuses: state.campuses }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewStudent)
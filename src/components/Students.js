import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../store'

const Students = (props) => {
    const students = props.students || []
    //console.log(students)

    const onClick = (student) => {
        props.deleteStudent(student, props.students)
    }
    return (
        < div >
            <h3>Students</h3>
            {students ?
                students.map(student => {
                    return (
                        <li key={student.id}>
                            <Link to={`/students/${student.id}`}>
                                {student.lastName}, {student.firstName}
                            </Link>
                            <button type='button' className="btn btn-danger btn-sm" onClick={() => { onClick(student) }}>X</button>
                        </li>)
                }
                ) : null}
        </div >
    )
}

const mapStateToProps = state => {
    return { students: state.students }
}

const mapDispatchToProps = dispatch => {
    return { deleteStudent: (student, students) => dispatch(deleteStudent(student, students)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students)
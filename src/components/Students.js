import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Students = (props) => {
    const students = props.students || []
    //console.log(students)
    return (
        < div >
            <h3>Students</h3>
            {students ?
                students.map(student => {
                    return (<li key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            {student.lastName}, {student.firstName}
                        </Link>
                    </li>)
                }
                ) : null}
        </div >
    )

}

const mapStateToProps = state => {
    return { students: state.students }
}

export default connect(mapStateToProps)(Students)
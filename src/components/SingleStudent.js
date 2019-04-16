import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const filterStudents = (id, props) => {
    console.log(id, props)
    return props.students.find(student => student.id === id)
}

const findCampus = (singleStudent, props) => {
    console.log(singleStudent)
    const campus = props.campuses.find(campus => campus.id === singleStudent.campusId)
    return campus
}

const SingleStudent = (props) => {
    const id = (props.match.params.id * 1)

    const singleStudent = filterStudents(id, props) || {}

    const studentCampus = findCampus(singleStudent, props) || "No Campus"

    const { firstName, lastName, imageUrl, email, gpa } = singleStudent

    return (
        <div>
            <h3>{lastName}, {firstName}</h3>
            <img src={imageUrl}></img>
            <ul>EMAIL: {email}</ul>
            <ul>GPA: {gpa}</ul>
            <ul>CAMPUS: <Link to={studentCampus ? `/campuses/${studentCampus.id}` : ''}> {studentCampus.name} </Link></ul>
        </div>
    )
}


const mapStateToProps = state => {
    return { students: state.students, campuses: state.campuses }
}

export default connect(mapStateToProps)(SingleStudent)
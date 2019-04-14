import React from 'react'
import { connect } from 'react-redux'
import { Link, Button } from 'react-router-dom'
import { deleteCampus } from '../store'

const Campuses = (props) => {
    const campuses = props.campuses || []

    const onClick = (campus) => {
        props.deleteCampus(campus, props.campuses)
    }

    return (
        <div>
            <h3>Campuses</h3>
            {campuses ?
                campuses.map(campus => {
                    return (
                        <div key={campus.id}>
                            <li key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                                <img src={campus.imageUrl}></img>
                            </li>
                            <button type='button' onClick={() => onClick(campus)}>Delete Campus</button>
                        </div>
                    )
                })
                : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { campuses: state.campuses }
}

const mapDispatchToProps = dispatch => {
    return { deleteCampus: (id, campuses) => dispatch(deleteCampus(id, campuses)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
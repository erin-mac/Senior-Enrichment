import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Campuses = (props) => {
    const campuses = props.campuses || []
    //console.log(campuses)
    return (
        <div>
            <h3>Campuses</h3>
            {campuses ?
                campuses.map(campus => {
                    return (
                        <li key={campus.id}>
                            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                            <img src={campus.imageUrl}></img>
                        </li>
                    )
                })
                : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { campuses: state.campuses }
}

export default connect(mapStateToProps)(Campuses)
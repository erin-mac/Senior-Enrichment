import React from 'react'
import { connect } from 'react-redux'

const filterCampuses = (id, props) => {
    return props.campuses.find(campus => campus.id === id)
}

const SingleCampus = (props) => {
    const id = (props.match.params.id * 1)
    //console.log(id)
    const singleCampus = filterCampuses(id, props) || {}
    //console.log(singleCampus)

    const { name, imageUrl, address, description } = singleCampus
    //console.log(name)
    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl}></img>
            <ul>{address}</ul>
            <ul>{description}</ul>
        </div>
    )
}


const mapStateToProps = state => {
    return { campuses: state.campuses }
}

export default connect(mapStateToProps)(SingleCampus)
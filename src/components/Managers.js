import React from 'react'
import { connect } from 'react-redux'

const Managers = (props) => {
    console.log(props.managers)
    return (
        <div>
            {props.managers.map(manager => {
                return <li key={manager.id}>{manager.name}</li>
            })}

        </div>
    )
}

const mapStateToProps = state => {
    return { managers: state.managers }
}

export default connect(mapStateToProps)(Managers)
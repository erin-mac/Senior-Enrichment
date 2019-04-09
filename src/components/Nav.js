import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {

    //console.log(typeof props.managers)
    return (

        <div>
            <ul className='nav nav-tabs'>

                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-link'>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/managers' className='nav-link'>Managers {props.managers.length ?
                        '(' + props.managers.length + ')' : ''}</Link>
                </li>

            </ul>
        </div>

    )
}

const mapStateToProps = state => {
    return { managers: state.managers }
}


export default connect(mapStateToProps)(Nav)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../store'
import { Link } from 'react-router-dom'
//import { builtinModules } from 'module';

export class Nav extends Component {
    componentDidMount() {
        this.props.goGetUsers()
    }

    render() {
        const topRanked = this.props.users.filter(user => user.rank === 1)
        console.log(topRanked)
        return (
            <div>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Users' className='nav-link'>Users ({this.props.users.length})</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Create' className='nav-link'>New User</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Top' className='nav-link'>Top Ranked ({topRanked.map(user => user.name)})</Link>
                    </li>
                </ul>
            </div >

        );
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => {
    return { goGetUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
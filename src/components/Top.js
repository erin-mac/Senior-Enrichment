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

        return (
            <div>
                {topRanked.map(user =>
                    <div>
                        <ul>{user.name}</ul>
                        <ul>{user.description}</ul>
                        <ul>Ranked {user.rank}</ul>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                )
                }
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
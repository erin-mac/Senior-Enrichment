import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../store'
//import { builtinModules } from 'module';

export class Home extends Component {
    componentDidMount() {
        console.log(this.props.goGetUsers)
        this.props.goGetUsers()
    }

    render() {
        return (
            <div>
                Welcome! We have {this.props.users.length} users!
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)


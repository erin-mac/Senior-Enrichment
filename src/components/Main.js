import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents, fetchCampuses } from '../store'
import Students from './Students'
import Campuses from './Campuses'
import Nav from './Nav'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import NewCampus from './NewCampus'
class Main extends Component {

    componentDidMount() {
        this.props.getCampuses()
            .catch(ex => console.log(ex))
        this.props.getStudents()
            .catch(ex => console.log(ex))
    }

    render() {

        return (
            <div>
                <h3>Welcome!</h3>
                <HashRouter>
                    <Route path='/' component={Nav} />
                    <Route exact path='/campuses' component={Campuses} />
                    <Route exact path='/students' component={Students} />
                    <Route exact path='/campuses/:id' component={SingleCampus} />
                    <Route exact path='/students/:id' component={SingleStudent} />
                    <Route exact path='/campuses/addCampus' component={NewCampus} />
                </HashRouter>
            </div>

        )
    }
}

const mapDispatchToProps = () => dispatch => {
    return {
        getStudents: () => dispatch(fetchStudents()),
        getCampuses: () => dispatch(fetchCampuses())
    }
}

export default connect(null, mapDispatchToProps)(Main)
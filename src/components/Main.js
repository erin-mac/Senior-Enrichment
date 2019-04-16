import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStudents, fetchCampuses } from '../store'
import Students from './Students'
import Campuses from './Campuses'
import Nav from './Nav'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import NewCampus from './NewCampus'
import NewStudent from './NewStudent'

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
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3>Student Campus Directory</h3>

                </Link>
                <Nav />
                <Route exact path='/' render={() => <h5>Welcome!</h5>} />
                <HashRouter>
                    <Switch>
                        <Route exact path='/campuses' component={Campuses} />
                        <Route exact path='/students' component={Students} />
                        <Route exact path='/campuses/addCampus' component={NewCampus} />
                        <Route exact path='/students/addStudent' component={NewStudent} />
                        <Route exact path='/campuses/:id' component={SingleCampus} />
                        <Route exact path='/students/:id' component={SingleStudent} />
                    </Switch>
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
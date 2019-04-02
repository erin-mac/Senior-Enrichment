import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import Top from './Top'
//import { connect } from 'react-redux'

export class Main extends Component {

    // componentDidMount() {
    //     this.props.loadMessages()
    // }

    render() {
        return (
            <div>
                <h1>Acme Users With Ranks</h1>
                <Nav />
                <Route exact path='/' component={Home} />
                <Route exact path='/Top' component={Top} />
            </div>

        );
    }
}


export default Main
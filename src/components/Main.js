import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchManagers } from '../store'
import { fetchProducts } from '../store'
import { checkManager } from '../store'
import Nav from './Nav'
import Managers from './Managers'
import ProductForm from './Products'
class Main extends Component {

    componentDidMount() {
        this.props.getManagers()
            .catch(ex => console.log(ex))
        this.props.getProducts()
            .catch(ex => console.log(ex))
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <h1> Acme Product Managers </h1>

                    <Nav />
                    <Route path="/managers" component={Managers} />
                    <Route exact path="/products" component={ProductForm} />
                    <Route exact path="/" render={() => <div>
                        We {checkManager() ? " HAVE " : " DO NOT HAVE "}
                        product manager positions open </div>} />



                </div>
            </HashRouter>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getManagers: () => dispatch(fetchManagers()),
        getProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(Main)


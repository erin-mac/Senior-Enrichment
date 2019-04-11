import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateManager } from '../store'

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = { newManager: {} };
    }

    handleChange = (ev) => {
        var newManager = this.props.managers.find(manager => manager.id == ev.target.value)
        this.setState({ newManager: newManager });
    }

    handleSave = (ev) => {
        updateManager(this.state.newManager)
        ev.preventDefault();
    }

    currentManagerName = (id) => {
        const manager = this.props.managers.find(manager => manager.id == id)
        return manager.name
    }
    render() {
        console.log(this.props.product)
        return (

            <form>
                {
                    this.props.products.map(product => {
                        return (
                            <div>
                                <label> {product.name}
                                    <select>
                                        {this.props.managers.map((manager) => {
                                            const currentManagerId = product.managerId
                                            return (<option key={manager.id} value={currentManagerId ? this.currentManagerName(currentManagerId) : "-- none --"}>{manager.name}</option>)
                                        })}
                                    </select>
                                </label>
                                <input type="submit" value="Submit" />
                            </div>
                        )
                    })
                }
            </form >
        )
    }
}

const mapStateToProps = state => {
    return { products: state.products, managers: state.managers }
}


export default connect(mapStateToProps)(ProductForm)
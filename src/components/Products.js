import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateManager } from '../store'

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = { products: {}, managers: {}, newManager: {} };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        this.setState({ manager: ev.target.value });
    }

    handleSubmit(ev) {
        updateManager()
        event.preventDefault();
    }

    currentManagerName = (id) => {
        const manager = props.managers.find(manager => manager.id == id)
        return manager.name
    }
    render() {
        return (

            <form>
                {
                    props.products.map(product => {
                        return (
                            <div>
                                <label> {product.name}
                                    <select>
                                        {props.managers.map(() => {
                                            const currentManagerId = product.managerId
                                            return (<option value="">{currentManagerId ? currentManagerName(currentManagerId) : "-- none --"}</option>)
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
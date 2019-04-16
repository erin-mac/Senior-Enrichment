import React from 'react'
import { connect } from 'react-redux'
import { addCampus } from '../store'

const NewCampus = (props) => {

    var newCampus = {
        name: '',
        imageUrl: '',
        address: '',
        description: ''
    }

    const handleChange = (ev) => {
        ev.preventDefault()
        newCampus[ev.target.name] = ev.target.value
        console.log(newCampus)
    }

    const handleSubmit = (ev) => {
        props.addCampus(newCampus)
    }

    return (
        <div>
            <h4>Enter new campus information below:</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
    <input type="text" name="name" onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
    <input type="text" name="address" onChange={handleChange} />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Image:
    <input type="text" name="imageUrl" onChange={handleChange} />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Description:
      <input type='text' name="description" onChange={handleChange} />
                    </label>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCampus: (campus) => dispatch(addCampus(campus))
    }
}


export default connect(null, mapDispatchToProps)(NewCampus)
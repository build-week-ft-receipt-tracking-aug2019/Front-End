import React, { useState } from 'react'
import { Edit } from '../actions/index'



const EditReceipt = (props) => {
    const [formData, setFormData] = useState(initialState);

    const initialState = {
        date: '',
        amount_spent: null,
        category: '',
        merchant: '',
        user_username: props.user_username
    };

    const changeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})

    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.Edit(formData)
    }



    return (

        <form onSubmit={submitHandler}>
            <input
                type='date'
                name='date'
                onChange={event => changeHandler(event)}
                value={formData.date}
            />
            <input
                type="number"
                step="0.01"
                min="0"
                max="100000"
                name="amount_spent"
                onChange={event => changeHandler(event)}
                value={formData.amount_spent}
            />
            <input
                type="text"
                name="category"
                onChange={event => changeHandler(event)}
                value={formData.category}
            />
            <input
                type="text"
                name="merchant"
                onChange={event => changeHandler(event)}
                value={formData.merchant}
            />
            <button>change</button>
        </form>
    )
}

const mapPropsToState = state => {
    console.log(state);
    return {
        data: state.data
    }
};

export default connect(
  mapPropsToState,
  { Edit }
  )(EditReceipt);
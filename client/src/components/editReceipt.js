import React, { useState } from 'react'
import { axiosWithAuth } from '../utilities/axiosWithAuth';



const Edit = (props) => {
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
        axiosWithAuth()
            .put('/users/receipt/:id', formData)
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

export default Edit
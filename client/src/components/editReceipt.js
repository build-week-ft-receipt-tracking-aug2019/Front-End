import React, { useState, useEffect } from 'react'
import { Edit } from '../actions/index'
import { connect } from 'react-redux'



const EditReceipt = (props) => {
    const [formData, setFormData] = useState({});

    // const initialState = {
    //     date: '',
    //     amount_spent: null,
    //     category: '',
    //     merchant: '',
    //     user_username: props.user_username
    // };

    useEffect(() => {
        console.log(props.match.params.receiptID)
        let currentReceipt = props.data.filter(item => item.id.toString() === props.match.params.receiptID)
        console.log(currentReceipt[0])
        setFormData(currentReceipt[0])
    }, [])

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)

    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.Edit(formData)
        props.history.push(`/${props.match.params.receiptID}`)
        // props.history.push(`/`)
    }


    return (
        <>
        {formData && <form onSubmit={submitHandler}>
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
        </form>}
        </>
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
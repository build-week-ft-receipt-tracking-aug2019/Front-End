import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const InitialData = {
    id: 1,
    receipt_merchant: 'Whole Foods',
    receipt_date: '08/26/19',
    receipt_category: 'Food',
    receipt_img: '',
    receipt_amount: '85.65',
    user_id: 0
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const inputStyle = {
    width: '200px',
    margin: '10px'
}

const buttonStyle = {
    width: '200px',
    margin: '10px'
}

const errorStyle = {
    fontSize: '.5em',
    color: 'red'
}

// To do:
// Need to set up Redux store
// Set up a add success dispatch to display success message
// Will need to take in render props to push component back to receipt list upon completion

const AddReceipt = ({ errors, touched }) => {

    const setFieldValue = event => {
        console.log(event.target.files[0].name)
    };

    return (
        <div>
            <p>Add new receipt below:</p>
            <Form style={formStyle}>
                <Field
                    style={inputStyle} 
                    type='date'
                    name='date'
                    placeholder='date'
                    />
                {touched.date && errors.date && <p style={errorStyle}>{errors.date}</p>}
                <Field
                    style={inputStyle}
                    type='text'
                    name='amount'
                    placeholder='Enter amount'
                    />
                {touched.amount && errors.amount && <p style={errorStyle}>{errors.amount}</p>}
                <Field
                    style={inputStyle} 
                    type='text'
                    name='category'
                    placeholder='selector for category will go here'
                    />
                {touched.category && errors.category && <p style={errorStyle}>{errors.category}</p>}
                <Field
                    style={inputStyle}
                    type='text'
                    name='merchant'
                    placeholder='Enter merchant info:'
                    />
                {touched.merchant && errors.merchant && <p style={errorStyle}>{errors.merchant}</p>}
                <Field
                    style={inputStyle} 
                    type='file'
                    name='image'
                    // onChange={setFieldValue}
                />
                <button style={buttonStyle} type='submit'>Add</button>
            </Form>
        </div>
    )
};

const AddReceiptForm = withFormik({
    mapPropsToValues({ merchant, date, category, image, amount }) {
        return {
            merchant: merchant || '',
            date: date || '',
            category: category || '',
            image: image || '',
            amount: amount || ''
        }
    },

    validationSchema: Yup.object().shape({
        merchant: Yup
            .string()
            .required('Merchant information is required'),
        date: Yup
            .string()
            .required('Date is required'),
        category: Yup
            .string()
            .required('Please choose a category'),
        image: Yup
            .string()
            .notRequired(),
        amount: Yup
            .number()
            .required('Amount is required')
            .positive()
    }),

    handleSubmit(values) {
        console.log(values);
        // Will need to be an authorized axios request
        Axios
            // Will need to fill in endpoint below:
            // https://receipt-tracker-api.herokuapp.com/receipt
            .post('endpoint', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
})(AddReceipt)

export default AddReceiptForm;

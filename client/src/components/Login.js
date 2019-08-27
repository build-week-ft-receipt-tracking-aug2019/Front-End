import React from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import 'semantic-ui-css/semantic.min.css'
import { AddUsernameToState } from '../actions/addUsernameToState'
import { connect } from 'react-redux';

const Login = ({ errors, touched, username }) => {


    return (
        <>
            <Form className='login-Form'>
                <h1>Login:</h1>
                <Field
                    name='username'
                    type='text'
                    autoComplete='off'
                    placeholder='username'
                />
                {touched.username && errors.username && <p className="error">{errors.username}</p>}
                <Field
                    name='email'
                    type='email'
                    autoComplete='off'
                    placeholder='email'
                />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                <Field
                    name='password'
                    type='password'
                    autoComplete='off'
                    placeholder='Password'
                />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <button type='submit'>Login &rarr;</button>
            </Form>
        </>
    )

}

const FormikForm = withFormik({
    mapPropsToValues({ username, password, email }) {
        return {
            username: username || '',
            password: password || '',
            email: email || '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().required(),
    }),

    handleSubmit(values, { props }) {
        axios
            .post('https://receipt-tracker-api.herokuapp.com/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.AddUsernameToState(values.username)
                props.history.push('/')

            })
            .catch(err => {
                console.log(values)
                console.log(err.response)
            });
    }
})(Login);

const mapStateToProps = state => ({
    state: state
  });
  
  export default connect(
    mapStateToProps,
    { AddUsernameToState }
  )(FormikForm);
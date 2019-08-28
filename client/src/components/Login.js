import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Button, Checkbox, Form as SemForm } from "semantic-ui-react";
import { connect } from "react-redux";
import { addUsernameToState } from "../actions/addUsernameToState";

import "semantic-ui-css/semantic.min.css";

const errorStyle = {
  fontSize: "1em",
  color: "red"
};

const Login = ({ errors, touched }) => {
  return (
    <SemForm className="formContainers">
      <Form className="login-Form">
        <h1>Login:</h1>
        <SemForm.Field>
          <Field
            name="username"
            type="text"
            autoComplete="off"
            placeholder="username"
          />
          {touched.username && errors.username && (
            <p style={errorStyle}>{errors.username}</p>
          )}
        </SemForm.Field>
        <SemForm.Field>
          <Field
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </SemForm.Field>
        <Button
          style={{
            margin: "1em auto",
            backgroundColor: "#25BB49",
            color: "white"
          }}
          type="submit"
        >
          Login &rarr;
        </Button>
      </Form>
    </SemForm>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { props }) {
    axios
      .post("https://receipt-tracker-api.herokuapp.com/login", values)
      .then(res => {
        console.log(values);
<<<<<<< HEAD
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        props.addUsernameToState(values.username);
        props.history.push("/");
=======
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.addUsernameToState(values.username)
        props.history.push('/')
>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
      })
      .catch(err => {
        console.log(values);
        console.log(err.response);
<<<<<<< HEAD
        props.history.push("/");
=======
        props.history.push('/')

>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
      });
  }
})(Login);

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
  { addUsernameToState }
)(FormikForm);

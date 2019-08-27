import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";

const Login = ({ errors, touched }) => {
  return (
    <>
      <Form className="login-Form">
        <h1>Login:</h1>
        <Field
          name="username"
          type="text"
          autoComplete="off"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit">Login &rarr;</button>
      </Form>
    </>
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

  handleSubmit(values) {
    axios
      .post("EndpointHere", values)
      .then(res => {
        console.log(values);
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(values);
        console.log(err.response);
      });
  }
})(Login);

export default FormikForm;

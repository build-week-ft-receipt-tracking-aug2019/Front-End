import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form as SemForm } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { addNewReceipt } from "../actions/index";

// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center"
// };

// const inputStyle = {
//   width: "200px",
//   margin: "10px"
// };

// const buttonStyle = {
//   width: "200px",
//   margin: "10px"
// };

const errorStyle = {
  fontSize: ".5em",
  color: "red"
};

// To do:
// Will need to take in render props to push component back to receipt list upon completion

const AddReceipt = ({ errors, touched }) => {
  const setFieldValue = event => {
    console.log(event.target.files[0].name);
  };

  return (
    <SemForm className="formContainers">
      <Form>
        <SemForm.Field>
          <Field type="date" name="date" placeholder="date" />
          {touched.date && errors.date && (
            <p style={errorStyle}>{errors.date}</p>
          )}
        </SemForm.Field>
        <SemForm.Field>
          <Field type="text" name="amount" placeholder="Enter amount" />
          {touched.amount && errors.amount && (
            <p style={errorStyle}>{errors.amount}</p>
          )}
        </SemForm.Field>
        <SemForm.Field>
          <Field
            type="text"
            name="category"
            placeholder="selector for category will go here"
          />
          {touched.category && errors.category && (
            <p style={errorStyle}>{errors.category}</p>
          )}
        </SemForm.Field>
        <SemForm.Field>
          <Field
            type="text"
            name="merchant"
            placeholder="Enter merchant info:"
          />
          {touched.merchant && errors.merchant && (
            <p style={errorStyle}>{errors.merchant}</p>
          )}
        </SemForm.Field>
        <SemForm.Field>
          <label for="upload" className="custom-upload">
            <p>Upload an image</p>
            <Field
              type="file"
              name="image"
              id="upload"
              style={{ display: "none" }}
              // onChange={setFieldValue}
            />
          </label>
        </SemForm.Field>
        <Button
          style={{
            margin: "1em auto",
            backgroundColor: "#25BB49",
            color: "white"
          }}
          type="submit"
        >
          Add Receipt &rarr;
        </Button>
      </Form>
    </SemForm>
  );
};

const AddReceiptForm = withFormik({
  mapPropsToValues({ merchant, date, category, image, amount }) {
    return {
      merchant: merchant || "",
      date: date || "",
      category: category || "",
      image: image || "",
      amount: amount || ""
    };
  },

  validationSchema: Yup.object().shape({
    merchant: Yup.string().required("Merchant information is required"),
    date: Yup.string().required("Date is required"),
    category: Yup.string().required("Please choose a category"),
    image: Yup.string().notRequired(),
    amount: Yup.number()
      .required("Amount is required")
      .positive()
  }),

  handleSubmit(values, { props }) {
    console.log(props);
    console.log(values);
    props.addNewReceipt(values);
    // setTimeout(props.history.push('/*New-Card-Path */'), 5000);
    // Will need to somehow props.history.push('/dashboard') upon success;
  }
})(AddReceipt);

const mapPropsToState = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    data: state.data
  };
};

export default connect(
  mapPropsToState,
  { addNewReceipt }
)(AddReceiptForm);

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
  fontSize: "1em",
  color: "red"
};

// * README *:
// As of 18:00 Tuesday getting 404 error on posting new receipt.
// Believe issue is with the back-end api as the data passed into the action at line 111
//  is exactly what the back-end README calls for.

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
          <Field type="number" name="amount_spent" placeholder="Enter amount" />
          {touched.amount_spent && errors.amount_spent && (
            <p style={errorStyle}>{errors.amount_spent}</p>
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
  mapPropsToValues({ merchant, date, category, image, amount_spent }) {
    return {
      merchant: merchant || "",
      date: date || "",
      category: category || "",
      // image commented out until we confirm it has been added to back end
      // image: image || "",
      amount_spent: amount_spent || ""
    };
  },

  validationSchema: Yup.object().shape({
    merchant: Yup.string().required("Merchant information is required"),
    date: Yup.string().required("Date is required"),
    category: Yup.string().required("Please choose a category"),
    image: Yup.string().notRequired(),
    amount_spent: Yup.number()
      .required("Amount_spent is required")
      .positive()
  }),

  handleSubmit(values, { props }) {
    // Had to deconstruct my values from formik to add the username from redux store to put in request
    const valuesWithUsername = { values };
    valuesWithUsername.values.user_username = props.user_username;
    props.addNewReceipt(valuesWithUsername.values);
    props.setCounter(!props.counter);
    // Will need to push to dashboard once back-end is finalized. See below:
    // setTimeout(props.history.push('/*New-Card-Path */'), 5000);
  }
})(AddReceipt);

const mapPropsToState = state => {
  console.log(state);
  return {
    user_username: state.user_username,
    isLoading: state.isLoading,
    error: state.error,
    data: state.data
  };
};
export default connect(
  mapPropsToState,
  { addNewReceipt }
)(AddReceiptForm);

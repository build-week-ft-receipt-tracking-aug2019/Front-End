import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Button, Checkbox, Form as SemForm } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { addNewReceipt, uploadPic } from "../actions/index";


const errorStyle = {
  fontSize: "1em",
  color: "red"
};

const AddReceiptForm = props => {
  console.log(props);
  
  const initialState = {
    date: '',
    amount_spent: null,
    category: '',
    merchant: '',
    user_username: props.user_username
  };
  
  // README: To display an image, import{ Image } from 'cloudinary-react'
  // and render <Image cloudName={'argordon} publicId={`${props.match.someID...}`} />

  // State to POST receipt data to our back-end
  const [formData, setFormData] = useState(initialState);
  // State to POST receipt image to Cloudinary
  const [selectedPic, setSelectedPic] = useState({});
  // State to set ID created by our back-end immediately onto image we POST to Cloudinary
  const [pic, setPic] = useState('')

  // Watches for the ID to be passed onto global state
  useEffect(() => {
    setPic(props.rec_id)
  }, [props.rec_id]);

  // Watches to state to be updated from global state
  useEffect(() => {
    // POST to Cloudinary
    props.uploadPic(selectedPic, pic)
  }, [pic]);

  // Will need to push to `users/receipts/${pros.rec_id}`
  // Note the useEffect on the Dashboard.js to 
  props.pic_success && props.history.push('/');

  return (
    <div>
      <SemForm className="formContainers">
        <form onSubmit={(event) => {
          event.preventDefault();
          // POST to back-end
          props.addNewReceipt(formData);
          }}
        >
          <SemForm.Field>
            <input 
              type="date" 
              name="date" 
              placeholder="date"
              onChange={(event) => setFormData({...formData, date: event.target.value})}
            />
            {/* {touched.date && errors.date && (<p> style={errorStyle}>{errors.date}</p>)} */}
          </SemForm.Field>

          <SemForm.Field>
            <input 
              type="number" 
              step="0.01"
              min="0"
              max="100000"
              name="amount_spent" 
              placeholder="Enter amount" 
              onChange={(event) => setFormData({...formData, amount_spent: event.target.value})}
            />
          {/* {touched.amount_spent && errors.amount_spent && (<p> style={errorStyle}>{errors.amount_spent}</p>)} */}
          </SemForm.Field>

          <SemForm.Field>
            <input 
              type="text" 
              name="category" 
              placeholder="selector for category will go here" 
              onChange={(event) => setFormData({...formData, category: event.target.value})}
            />
          {/* {touched.category && errors.category && (<p> style={errorStyle}>{errors.category}</p>)} */}
          </SemForm.Field>

          <SemForm.Field>
            <input 
              type="text" 
              name="merchant" 
              placeholder="Enter merchant info:" 
              onChange={(event) => setFormData({...formData, merchant: event.target.value})}
            />
          {/* {touched.merchant && errors.merchant && (<p> style={errorStyle}>{errors.merchant}</p>)} */}
          </SemForm.Field>

          <SemForm.Field>
            <input 
              type="file" 
              name="image" 
              id="upload" 
              // style={{ display: "none" }} 
              onChange={(event) => setSelectedPic(event.target.files[0])}
            />
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
        </form>
      </SemForm>
    </div>
  )
};


const mapPropsToState = state => {
    console.log(state);
    return {
        pic_success: state.pic_success,
        rec_id: state.rec_id,
        user_username: state.user_username,
        isLoading: state.isLoading,
        error: state.error,
        data: state.data
    }
};

export default connect(
  mapPropsToState,
  { addNewReceipt, 
    uploadPic 
  })(AddReceiptForm);

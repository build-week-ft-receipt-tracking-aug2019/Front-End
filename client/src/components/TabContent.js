import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
import "../App.css";
=======
import { connect } from 'react-redux'
import { Image } from 'cloudinary-react';
import '../App.css'

const TabContent = (props) => {
  const [receipt, setReceipt] = useState({})
  // console.log('PROPS WITHIN TABCONTENT', props)
  //console.log('receipt', receipt)
>>>>>>> 81e9dd6cf5f12915a51d476c21646666b438469b

const TabContent = props => {
  const [receipt, setReceipt] = useState({});
  console.log("PROPS WITHIN TABCONTENT", props);
  console.log("receipt", receipt);

  useEffect(() => {
    setReceipt(props.data.filter(item => item.id === props.id));
  }, []);

  // const { merchant, date, total, id } = props;
  return (
    <div className="tab">
      {receipt.length && (
        <div className="tabContent">
          <div className="nameDateCol">
            <h3 className='meta'>{receipt[0].merchant}</h3>
            <h4>{receipt[0].date}</h4>
            <h3>Total: ${receipt[0].amount_spent}</h3>
          </div>
          <div className="totalCol">
<<<<<<< HEAD
            <div className="editCard">Edit</div>
            <div
              className="deleteCard"
              onClick={event => {
                event.stopPropagation();
                props.deleteReceipt(receipt.id);
                props.setCounter(!props.counter);
              }}
            >
              X
            </div>
            <h3>Total: ${receipt[0].amount_spent}</h3>
=======
            <p>Image preview:</p>
            <Image className="rec-img-prev" cloudName={'argordon'} publicId={`${props.id}`} />
>>>>>>> 81e9dd6cf5f12915a51d476c21646666b438469b
          </div>
        </div>
      )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    data: state.data
  };
};

export default connect(mapPropsToState)(TabContent);

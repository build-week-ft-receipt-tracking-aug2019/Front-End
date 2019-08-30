import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Image } from 'cloudinary-react';
import '../App.css'

const TabContent = (props) => {
  // const [receipt, setReceipt] = useState({})
  // console.log('PROPS WITHIN TABCONTENT', props)
  //console.log('receipt', receipt)

const TabContent = props => {
  const [receipt, setReceipt] = useState({});
  console.log("PROPS WITHIN TABCONTENT", props);
  console.log("receipt", receipt);


  // useEffect(() => {
  //   setReceipt(props.data.filter(item => item.id === props.id))
  // }, [])

  const { merchant, date, total, id } = props; 
  return (
    <div className="tab">
      {
        // receipt.length &&

        <div className="tabContent">
          <div className="nameDateCol">
            <h3 className='meta'>{merchant}</h3>
            <h4>{date}</h4>
            <h3>Total: ${total}</h3>
          </div>
          <div className="totalCol">

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

            <p>Image preview:</p>

            <Image className="rec-img-prev" cloudName={'argordon'} publicId={`${id}`} />

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

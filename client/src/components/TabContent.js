import React from "react";
import { deleteReceipt } from '../actions/deleteReceipt'
import '../App.css'

const TabContent = ({ merchant, date, total, id }) => {
  return (
    <div className="tab">
      <div className="tabContent">
        <div className="nameDateCol">
          <h3>{merchant}</h3>
          <h4>{date}</h4>
        </div>
        <div className="totalCol">
          <div className="editCard">Edit</div>
          <div className="deleteCard" onClick={()=>deleteReceipt(id)}>X</div>
          <h3>Total: {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

import React, {useState, useEffect} from "react";
import '../App.css'

const TabContent = (props) => {
  const [receipt, setReceipt] = useState({
    myReceipt: {}
  })
  console.log('PROPS WITHIN TABCONTENT', props)


  const { merchant, date, total, id } = props; 
  return (
    <div className="tab">
      <div className="tabContent">
        <div className="nameDateCol">
          <h3>{merchant}</h3>
          <h4>{date}</h4>
        </div>
        <div className="totalCol">
          <div className="editCard">Edit</div>
          <div 
            className="deleteCard" 
            onClick={(event)=> {
              event.stopPropagation(); 
              props.deleteReceipt(id);
              props.setCounter(!props.counter)}}
          >X</div>
          <h3>Total: {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

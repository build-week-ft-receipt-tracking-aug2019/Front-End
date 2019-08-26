import React from "react";

const TabContent = ({ merchant, date, total }) => {
  return (
    <div className="tab">
      <div className="tabContent">
        <div className="nameDateCol">
          <h3>{merchant}</h3>
          <h4>{date}</h4>
        </div>
        <div className="totalCol">
          <h3>Total: {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

import React, { Fragment } from "react";
import { Tab } from "semantic-ui-react";
import ModalAddReceipt from "./ModalAddReceipt";
import TabContent from "./TabContent";
import Spent from "./Spent";
import { connect } from 'react-redux';

const fakeData = [
  {
    id: 1,
    merchant: "Publix",
    date: "08/26/19",
    total: "$178.96",
    category: "Food",
    img: ""
  },
  {
    id: 2,
    merchant: "Best Buy",
    date: "08/24/19",
    total: "$362.70",
    category: "Electronics",
    img: ""
  }
];

const panes = [
  {
    menuItem: "Recent",
    pane: {
      content: (
        <Fragment>
          <div className="tabHeading">
            <h2>Your Receipts</h2>
            <ModalAddReceipt />
          </div>
          {fakeData.map(data => {
            return (
              <TabContent
                merchant={data.merchant}
                date={data.date}
                total={data.total}
              />
            );
          })}
          <Spent time={"month"} />
        </Fragment>
      )
    }
  },
  {
    menuItem: "3 Month Overview",
    pane: {
      content: (
        <Fragment>
          <div className="tabHeading">
            <h2>Your Receipts</h2>
            <ModalAddReceipt />
          </div>
          {fakeData.map(data => {
            return (
              <TabContent
                merchant={data.merchant}
                date={data.date}
                total={data.total}
              />
            );
          })}
          <Spent time={"3 months"} />
        </Fragment>
      )
    }
  },
  {
    menuItem: "All Receipts",
    pane: {
      content: (
        <Fragment>
          <div className="tabHeading">
            <h2>Your Receipts</h2>
            <ModalAddReceipt />
          </div>
          {fakeData.map(data => {
            return (
              <TabContent
                merchant={data.merchant}
                date={data.date}
                total={data.total}
              />
            );
          })}
          <Spent time={"year"} />
        </Fragment>
      )
    }
  }
];

const Dashboard = (props) => {
  return (
    <div>
      <button onClick={() => console.log(props.state)}>state</button>
      <Tab
        style={{ backgroundColor: "#e6e8e6" }}
        panes={panes}
        renderActiveOnly={false}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
)(Dashboard);

// export default Dashboard;

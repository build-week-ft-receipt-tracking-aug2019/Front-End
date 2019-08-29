import React, { Fragment, useEffect } from "react";
import { Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import ModalAddReceipt from "./ModalAddReceipt";
import TabContent from "./TabContent";
import Spent from "./Spent";
import { getReceipts } from "../actions";
import { resetAsyncProps } from '../actions';

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

const Dashboard = props => {
  // Need to put this useEffect in the single Receipt component
  useEffect(() => {
    console.log('Dashboard mounted')
    props.getReceipts(props);
    props.resetAsyncProps();
  }, [])

  return (
    <div>
      <Tab
        style={{ backgroundColor: "#e6e8e6" }}
        panes={panes}
        renderActiveOnly={false}
      />
    </div>
  );
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
  };
};

export default connect(
  mapPropsToState,
  { getReceipts, 
    resetAsyncProps 
  })(Dashboard);

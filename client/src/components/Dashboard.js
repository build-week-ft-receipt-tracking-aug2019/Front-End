import React, { Fragment, useEffect } from "react";
import { Tab } from "semantic-ui-react";
import ModalAddReceipt from "./ModalAddReceipt";
import TabContent from "./TabContent";
import Spent from "./Spent";
import { getReceipts } from "../actions/getReceipts";
import {deleteReceipt} from "../actions/deleteReceipt"
import { connect } from 'react-redux';

// const fakeData = [
//   {
//     id: 1,
//     merchant: "Publix",
//     date: "08/26/19",
//     total: "$178.96",
//     category: "Food",
//     img: ""
//   },
//   {
//     id: 2,
//     merchant: "Best Buy",
//     date: "08/24/19",
//     total: "$362.70",
//     category: "Electronics",
//     img: ""
//   }
// ];


const Dashboard = props => {

  console.log('FROM THE DASH-',props.data)
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
            {props.data.map(data => {
              return (
                <TabContent
                  merchant={data.merchant}
                  date={data.date}
                  total={data.amount_spent}
                  id={data.id}
                  deleteReceipt={props.deleteReceipt}
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
            {props.data.map(data => {
              return (
                <TabContent
                  merchant={data.merchant}
                  date={data.date}
                  total={data.amount_spent}
                  id={data.id}
                  deleteReceipt={props.deleteReceipt}
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
            {props.data.map(data => {
              return (
                <TabContent
                  merchant={data.merchant}
                  date={data.date}
                  total={data.amount_spent}
                  id={data.id}
                  deleteReceipt={props.deleteReceipt}
                />
              );
            })}
            <Spent time={"year"} />
          </Fragment>
        )
      }
    }
  ];

  useEffect(() => {
    props.getReceipts(props);
    console.log("Dashboard mounted");
  }, []);

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
    user_username: state.user_username,
    isLoading: state.isLoading,
    error: state.error,
    data: state.data
  };
};

export default connect(
  mapPropsToState,
  { getReceipts: getReceipts,
    deleteReceipt: deleteReceipt
  }
)(Dashboard);

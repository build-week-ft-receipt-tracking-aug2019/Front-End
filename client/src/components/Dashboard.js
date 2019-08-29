import React, { Fragment, useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import ModalAddReceipt from "./ModalAddReceipt";
import TabContent from "./TabContent";
import Spent from "./Spent";
import { getReceipts } from "../actions/getReceipts";
import {deleteReceipt} from "../actions/deleteReceipt";
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';


const Dashboard = props => {
  const [counter, setCounter] = useState(false)

  console.log('FROM THE DASH-',props.data)
  
  const panes = [
    {
      menuItem: "Recent",
      pane: {
        content: (
          <Fragment>
            <div className="tabHeading">
              <h2>Your Receipts</h2>
              <ModalAddReceipt setCounter={setCounter} counter={counter}/>
            </div>

            <Route exact path="/:receiptID" render={props => <TabContent {...props} merchant={props.data.merchant}
                    date={props.data.date}
                    total={props.data.amount_spent}
                    id={props.data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter} 
                    counter={counter}/>} />

            {props.data && props.data.map(data => {
              return (
                <Link to={`/${data.id}`}>
                  <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter} 
                    counter={counter}/>
                </Link>
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
              <ModalAddReceipt setCounter={setCounter} counter={counter}/>
            </div>
            {props.data && props.data.map(data => {
              return (                
                <Link to={`/${data.id}`}>
                   <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter} 
                    counter={counter}/>
                </Link>
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
              <ModalAddReceipt setCounter={setCounter} counter={counter}/>
            </div>
            {props.data && props.data.map(data => {
              return (
                
                <Link to={`/${data.id}`}>
                  <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter} 
                    counter={counter}/>
                </Link>
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
    console.log("Dashboard mounted", props);
  }, [counter]);

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

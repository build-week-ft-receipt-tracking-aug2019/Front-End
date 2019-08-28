import React, { Fragment, useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import ModalAddReceipt from "./ModalAddReceipt";
import TabContent from "./TabContent";
import Spent from "./Spent";
import { getReceipts } from "../actions/getReceipts";
<<<<<<< HEAD
import { deleteReceipt } from "../actions/deleteReceipt";
import { connect } from "react-redux";
=======
import {deleteReceipt} from "../actions/deleteReceipt"
import { connect } from 'react-redux';
import Search from './Search'
>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06

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
<<<<<<< HEAD
  const [counter, setCounter] = useState(false);

  console.log("FROM THE DASH-", props.data);
=======

  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [counter, setCounter] = useState(false)


  const searchClickHandler = () => {
    setIsSearching(!isSearching)
  }

  const displayState = () => {
    console.log(isSearching)
    console.log(searchResults)
    console.log(props.data)
  }

  console.log('FROM THE DASH-', props.data)
>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
  const panes = [
    {
      menuItem: "Recent",
      pane: {
        content: (
          <Fragment>
            <div className="tabHeading">
<<<<<<< HEAD
              <h2>Your Receipts</h2>
              <ModalAddReceipt setCounter={setCounter} counter={counter} />
            </div>
            {props.data &&
              props.data.map(data => {
                return (
                  <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter}
                    counter={counter}
                  />
                );
              })}
=======
              {isSearching === false ? <><h2>Your Receipts</h2><h2 onClick={searchClickHandler}>s</h2></> : <Search allData={props.data} isSearching={isSearching} setIsSearching={setIsSearching} setSearchResults={setSearchResults} />}
              {!isSearching && <ModalAddReceipt setCounter={setCounter} counter={counter}/>}
            </div>
            {
              isSearching === false ?
                props.data.map(data => {
                  return (
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter} 
                      counter={counter}
                />
                  );
                })
                : searchResults.map(data => {
                  return (
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter} 
                      counter={counter}
                />
                  );
                })
            }

>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
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
<<<<<<< HEAD
              <h2>Your Receipts</h2>
              <ModalAddReceipt setCounter={setCounter} counter={counter} />
            </div>
            {props.data &&
              props.data.map(data => {
                return (
                  <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter}
                    counter={counter}
                  />
                );
              })}
=======
              {isSearching === false ? <><h2>Your Receipts</h2><h2 onClick={searchClickHandler}>s</h2></> : <Search allData={props.data} isSearching={isSearching} setIsSearching={setIsSearching} setSearchResults={setSearchResults} />}
              {!isSearching && <ModalAddReceipt setCounter={setCounter} counter={counter}/>}
            </div>
            {
              isSearching === false ?
                props.data.map(data => {
                  return (
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      setCounter={setCounter} 
                      counter={counter}
                    />
                  );
                })
                :
                searchResults.map(data => {
                  return (
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      setCounter={setCounter} 
                      counter={counter}
                    />
                  );
                })
            }
>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
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
<<<<<<< HEAD
              <h2>Your Receipts</h2>
              <ModalAddReceipt setCounter={setCounter} counter={counter} />
            </div>
            {props.data &&
              props.data.map(data => {
                return (
                  <TabContent
                    merchant={data.merchant}
                    date={data.date}
                    total={data.amount_spent}
                    id={data.id}
                    deleteReceipt={props.deleteReceipt}
                    setCounter={setCounter}
                    counter={counter}
                  />
                );
              })}
=======
              {isSearching === false ? <><h2>Your Receipts</h2><h2 onClick={searchClickHandler}>s</h2></> : <Search allData={props.data} isSearching={isSearching} setIsSearching={setIsSearching} setSearchResults={setSearchResults} />}
              {!isSearching && <ModalAddReceipt setCounter={setCounter} counter={counter}/>}
            </div>
            {
              isSearching === false ?
                props.data.map(data => {
                  return (
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter} 
                      counter={counter}
                />
                  );
                })
                :
                searchResults.map(data => {
                  return (
                   <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter} 
                      counter={counter}
                />
                  );
                })
            }
>>>>>>> 95e2136badfa5b2510ffba17866bbf36f5413d06
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
  { getReceipts: getReceipts, deleteReceipt: deleteReceipt }
)(Dashboard);

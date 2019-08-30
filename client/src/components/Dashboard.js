import React, { Fragment, useEffect, useState } from "react";
import { Tab } from "semantic-ui-react";
import TabContent from "./TabContent";
import { resetAsyncProps } from '../actions';
import { getReceipts } from "../actions/getReceipts";
import { deleteReceipt } from "../actions/deleteReceipt";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from "./Search";
import '../App.css'

const Dashboard = props => {

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [counter, setCounter] = useState(false);

  const searchClickHandler = () => {
    setIsSearching(!isSearching);
  };

  // Need to put this useEffect in the single Receipt component
  useEffect(() => {
    props.resetAsyncProps();
  }, [])

  const panes = [
    {
      menuItem: "Recent",
      pane: {
        content: (
          <Fragment>
            <div className="tabHeading">
              {isSearching === false ? (
                <>
                  <h2>Your Receipts</h2>
                  <h2 className="searchButton" onClick={searchClickHandler}>
                    Search
                  </h2>
                </>
              ) : (
                  <Search
                    allData={props.data}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                    setSearchResults={setSearchResults}
                  />
                )}
              {!isSearching && (
                null//<ModalAddReceipt setCounter={setCounter} counter={counter} />
              )}
            </div>
            {isSearching === false
              ? props.data.map(data => {

                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter}
                      counter={counter}
                    />
                  </Link>
                );
              })
              : searchResults && searchResults.map(data => {
                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter}
                      counter={counter}
                    />
                  </Link>
                );
              })}

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
              {isSearching === false ? (
                <>
                  <h2>Your Receipts</h2>
                  <h2 className="searchButton" onClick={searchClickHandler}>
                    Search
                  </h2>
                </>
              ) : (
                  <Search
                    allData={props.data}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                    setSearchResults={setSearchResults}
                  />
                )}
              {!isSearching && (
                null//<ModalAddReceipt setCounter={setCounter} counter={counter} />
              )}
            </div>
            {isSearching === false
              ? props.data.map(data => {

                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      setCounter={setCounter}
                      counter={counter}
                      deleteReceipt={props.deleteReceipt}
                    />
                  </Link>
                );
              })
              : searchResults.map(data => {
                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      setCounter={setCounter}
                      counter={counter}
                      deleteReceipt={props.deleteReceipt}
                    />
                  </Link>
                );
              })}

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
              {isSearching === false ? (
                <>
                  <h2>Your Receipts</h2>
                  <h2 className="searchButton" onClick={searchClickHandler}>
                    Search
                  </h2>
                </>
              ) : (
                  <Search
                    allData={props.data}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                    setSearchResults={setSearchResults}
                  />
                )}
              {!isSearching && (
               null//<ModalAddReceipt setCounter={setCounter} counter={counter} />
              )}
            </div>
            {isSearching === false
              ? props.data.map(data => {
                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter}
                      counter={counter}
                    />
                  </Link>
                );
              })
              : searchResults.map(data => {
                return (
                  <Link to={`/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <TabContent
                      merchant={data.merchant}
                      date={data.date}
                      total={data.amount_spent}
                      id={data.id}
                      deleteReceipt={props.deleteReceipt}
                      setCounter={setCounter}
                      counter={counter}
                    />
                  </Link>
                );
              })}

          </Fragment>
        )
      }
    }
  ];

  useEffect(() => {
    props.getReceipts(props);
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
  { getReceipts: getReceipts, resetAsyncProps, deleteReceipt: deleteReceipt }
)(Dashboard);

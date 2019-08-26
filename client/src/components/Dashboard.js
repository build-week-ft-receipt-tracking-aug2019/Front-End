import React, { Fragment } from "react";
import { Tab } from "semantic-ui-react";
import TabContent from "./TabContent";
import Spent from "./Spent";

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
          <h2 className="tabHeading">Your Receipts</h2>
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
          <h2 className="tabHeading">Your Receipts</h2>
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
          <h2 className="tabHeading">Your Receipts</h2>
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

const Dashboard = () => {
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

export default Dashboard;

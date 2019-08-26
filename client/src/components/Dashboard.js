import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import TabContent from "./TabContent";

const fakeData = {
  id: 1,
  merchant: "Publix",
  date: "08/26/19",
  total: "$178.96",
  category: "Food",
  img: ""
};

const panes = [
  {
    menuItem: "Recent",
    pane: {
      content: (
        <TabContent
          merchant={fakeData.merchant}
          date={fakeData.date}
          total={fakeData.total}
        />
      )
    }
  },
  {
    menuItem: "3 Month Overview",
    pane: {
      content: <TabContent />
    }
  },
  {
    menuItem: "All Receipts",
    pane: {
      content: <TabContent />
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

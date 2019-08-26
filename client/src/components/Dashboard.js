import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import TabContent from "./TabContent";

const panes = [
  {
    menuItem: "Recent",
    pane: {
      content: <TabContent />
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

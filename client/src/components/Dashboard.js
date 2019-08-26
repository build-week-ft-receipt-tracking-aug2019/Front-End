import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const DashBaord = props => <NavLink exact {...props} />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const recentLabel = createLabel("recent", "Recent");
const threeMonthLabel = createLabel("threeMonths", "View Past 3 Months");
const allLabel = createLabel("recent", "View All");

const panes = [
  {
    menuItem: (
      <Menu.Item key="recent" as={DashBaord} to={`/`} content={recentLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="chars"
        as={DashBaord}
        to={`/threeMonth`}
        content={threeMonthLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item key="chars" as={DashBaord} to={`/all`} content={allLabel} />
    )
  }
];

const TabDash = () => (
  <Tab panes={panes} renderActiveOnly={false} activeClassName="active" />
);

export default TabDash;

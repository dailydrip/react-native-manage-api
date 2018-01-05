import React from "react";
import { DrawerNavigator } from "react-navigation";
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";
import ApiScreen from "../Containers/ApiScreen";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator(
  {
    ListviewExample: { screen: ListviewExample },
    CardExample: { screen: CardExample },
    ApiScreen: { screen: ApiScreen }
  },
  {
    initialRouteName: "ListviewExample",
    contentComponent: props => <DrawerContent {...props} />,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default NavigationDrawer;

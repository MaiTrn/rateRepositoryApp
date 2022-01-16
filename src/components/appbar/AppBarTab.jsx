import React from "react";
import Text from "../others/Text";
import theme from "../../theme";
import { Link } from "react-router-native";

const AppBarTab = ({ title, link }) => {
  return (
    <Link to={link} style={{ padding: theme.spacing.m }}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;

import React from "react";
import { Pressable } from "react-native";
import Text from "../others/Text";
import theme from "../../theme";
import { Link } from "react-router-native";

const AppBarTab = ({ title, link, ...props }) => {
  return link ? (
    <Link to={link} style={{ padding: theme.spacing.m }}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        {title}
      </Text>
    </Link>
  ) : (
    <Pressable style={{ padding: theme.spacing.m }} {...props}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        Sign out
      </Text>
    </Pressable>
  );
};

export default AppBarTab;

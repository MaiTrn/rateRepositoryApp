import React from "react";
import { Pressable } from "react-native";
import Text from "../others/Text";
import theme from "../../theme";
import { Link } from "react-router-native";

const AppBarTab = ({ title, link }) => {
  return (
    <Pressable style={{ padding: theme.spacing.m }}>
      <Link to={link}>
        <Text fontWeight="bold" fontSize="subheading" color="white">
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;

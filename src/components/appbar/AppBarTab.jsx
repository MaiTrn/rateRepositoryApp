import React from "react";
import { Pressable } from "react-native";
import Text from "../others/Text";
import theme from "../../theme";

const AppBarTab = ({ title }) => {
  return (
    <Pressable style={{ padding: theme.spacing.m }}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;

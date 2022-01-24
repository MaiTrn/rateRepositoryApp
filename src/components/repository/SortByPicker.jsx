import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

import theme from "../../theme";

const orderByOptions = [
  {
    label: "Latest repositories",
    value: "latest",
  },
  {
    label: "Highest rated repositories",
    value: "highestRating",
  },
  {
    label: "Lowest rated repositories",
    value: "lowestRating",
  },
];

const SortByPicker = ({ selectedValue, onChange }) => {
  return (
    <Picker
      prompt="Select an item..."
      selectedValue={selectedValue}
      onValueChange={onChange}
      style={styles.picker}
    >
      {orderByOptions.map((option) => (
        <Picker.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Picker>
  );
};

export default SortByPicker;

const styles = StyleSheet.create({
  picker: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
});

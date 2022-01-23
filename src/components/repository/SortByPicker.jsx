import React from "react";
import { Picker } from "@react-native-picker/picker";

const SortByPicker = ({ selectedValue, onChange }) => {
  return (
    <Picker
      prompt="Select an item..."
      selectedValue={selectedValue}
      onValueChange={(itemValue) => onChange(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="Latest repositories" />
      <Picker.Item
        label="Highest rated repositories"
        value="Highest rated repositories"
      />
      <Picker.Item
        label="Lowest rated repositories"
        value="Lowest rated repositories"
      />
    </Picker>
  );
};

export default SortByPicker;

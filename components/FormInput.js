import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";

const FormInput = ({
  title,
  description,
  placeholder,
  type,
  labelStyle,
  inputStyle,
  descStyle,
  value,
  handleChange,
}) => {
  return (
    <View>
      <Text style={labelStyle}>{title}</Text>
      <TextInput
        placeholderTextColor="#fff"
        placeholder={placeholder}
        keyboardType={type}
        style={inputStyle}
        value={value}
        onChangeText={handleChange}
      />
      <Text style={descStyle}>{description}</Text>
    </View>
  );
};

export default FormInput;

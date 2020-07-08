import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ title, onClick }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text style={styles.btnTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    width: 250,
    textAlign: "center",
    padding: 20,
    backgroundColor: "#3CD52E",
    borderRadius: 10,
    marginBottom: 100,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});

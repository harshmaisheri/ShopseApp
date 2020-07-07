import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TopBanner() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#430098", "#8752ba"]}
        start={[0.1, 0.9]}
        style={styles.linearGradient}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/images/byju.png")}
          style={styles.image}
        />
        <Text style={styles.icon}>EduTech Courses</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "50px",
    height: "50px",
  },
  icon: {
    textAlign: "center",
    margin: "20px",
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  linearGradient: {
    width: "100%",
    padding: "15px",
    height: "175px",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
});

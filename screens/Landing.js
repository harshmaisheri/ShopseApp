import React, { Component } from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import TopBanner from "../components/TopBanner";
import Button from "../components/Button";

export default class Landing extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require("../assets/images/Logo.png")}
          style={{ width: 200, height: 60, marginRight: 16 }}
        ></Image>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              paddingLeft: "15px",
              color: "#430098",
              marginTop: "-8px",
            }}
          >
            &times;
          </Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <Image
          resizeMode="contain"
          source={require("../assets/images/telephone.png")}
          style={{ width: "25px", height: "25px", marginRight: "16px" }}
        ></Image>
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <TopBanner />

        <Text style={styles.subtitle}>No cost EMI Available</Text>
        <View style={styles.row}>
          <View stlye={styles.col}>
            <View style={styles.iconContainer}>
              <Icon
                name="calendar-check-o"
                type="font-awesome"
                color="#430098"
              />
            </View>
            <Text style={styles.descriptionText}>No Cost EMI</Text>
          </View>
          <View stlye={styles.col}>
            <View style={styles.iconContainer}>
              <Icon name="handshake-o" type="font-awesome" color="#430098" />
            </View>
            <Text style={styles.descriptionText}>Instant Approval</Text>
          </View>
          <View stlye={styles.col}>
            <View style={styles.iconContainer}>
              <Icon name="shield" type="font-awesome" color="#430098" />
            </View>
            <Text style={styles.descriptionText}>Secure Payment</Text>
          </View>
        </View>

        <Button
          title="Add Personal Details"
          onClick={() => this.props.navigation.navigate("Form")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "92vh",
  },
  subtitle: {
    textAlign: "center",
    fontStyle: "italic",
    padding: "20px",
    fontSize: 16,
    opacity: 0.8,
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  col: {
    width: "33%",
  },
  iconContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 30,
    width: "50px",
    height: "50px",
    alignSelf: "center",
    justifyContent: "center",
    padding: "10px",
    marginBottom: "20px",
  },
  descriptionText: {
    fontSize: 16,
    opacity: 0.7,
  },
});

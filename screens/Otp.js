import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import TopBanner from "../components/TopBanner";
import Button from "../components/Button";

export default class OTP extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Image
          resizeMode="contain"
          source={require("../assets/images/Logo.png")}
          style={{ width: 200, height: 60, marginRight: 16 }}
        />
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
        />
      ),
    };
  };

  createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "Done",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View style={style.container}>
        <TopBanner />

        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Please fill the one time password sent on your mobile phone
        </Text>

        <TextInput
          style={style.input}
          placeholder="6 digit OTP"
          keyboardType="number-pad"
        />

        <Button title="Verify OTP" onClick={this.createTwoButtonAlert} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
  input: {
    padding: "10px",
    fontSize: 16,
    color: "#000",
    width: "200px",
    height: "60px",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: "30px",
  },
});

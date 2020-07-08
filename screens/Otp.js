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
      headerTitle: () => (
        <Image
          resizeMode="contain"
          source={require("../assets/images/Logo.png")}
          style={{ width: 200, height: 60, marginRight: 16 }}
        />
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              marginLeft: 16,
              color: "#430098",
              marginTop: -8,
            }}
          >
            &times;
          </Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <Image
          resizeMode="contain"
          source={require("../assets/images/telephone.png")}
          style={{ width: 25, height: 25, marginRight: 16 }}
        />
      ),
    };
  };

  handleAlert = () =>
    Alert.alert(
      "Alert Title",
      "Done",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("Landing"),
        },
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

        <Button title="Verify OTP" onClick={this.handleAlert} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    minHeight: 900,
    backgroundColor: "#fff",
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: "#000",
    width: 200,
    height: 60,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#F0F0F0",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 30,
    textAlign: "center",
  },
});

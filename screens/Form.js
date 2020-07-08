import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

import FormInput from "../components/FormInput";
import TopBanner from "../components/TopBanner";
import Button from "../components/Button";

export default class Form extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      phoneNumber: "",
      email: "",
      selectedTnc: false,
      selectedWA: false,
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <TopBanner />

        {/* Input Container  */}
        <View style={styles.backContainer}>
          <LinearGradient
            colors={["#19913F", "#47B269"]}
            start={[0.1, 0.2]}
            style={styles.grnContainer}
          >
            <FormInput
              title="Payment amount for Byju's"
              description="Add the amount you need to pay the vendor for your purchase"
              placeholder="Ex. 20000"
              type="number-pad"
              labelStyle={styles.label}
              inputStyle={styles.input}
              descStyle={styles.description}
              handleChange={(text) =>
                this.setState({ ...this.state, amount: text })
              }
            />

            <FormInput
              title="Mobile Number"
              description="Mobile Number is needed for authentiation of your account"
              placeholder="Ex. 1234567890"
              type="number-pad"
              labelStyle={styles.label}
              inputStyle={styles.input}
              descStyle={styles.description}
              handleChange={(text) =>
                this.setState({
                  ...this.state,
                  phoneNumber: text,
                })
              }
            />

            <FormInput
              title="Email Id"
              description="Add your email id to receive invoice, notification and offers"
              placeholder="Ex. abc@xyz.com"
              type="email-address"
              labelStyle={styles.label}
              inputStyle={styles.input}
              descStyle={styles.description}
              handleChange={(text) =>
                this.setState({ ...this.state, email: text })
              }
            />
          </LinearGradient>
        </View>
        <View style={styles.tncContainer}>
          <View
            style={styles.tncCol}
            onStartShouldSetResponder={() =>
              this.setState({
                ...this.state,
                selectedTnc: !this.state.selectedTnc,
              })
            }
          >
            <Icon
              style={{ marginRight: 16 }}
              name="check-square-o"
              type="font-awesome"
              color={this.state.selectedTnc ? "#3CD52E" : "#F0F0F0"}
            />
            <Text>Agree to the Terms and Conditions and Privacy Policy</Text>
          </View>
          <View
            style={styles.tncCol}
            onStartShouldSetResponder={() =>
              this.setState({
                ...this.state,
                selectedWA: !this.state.selectedWA,
              })
            }
          >
            <Icon
              style={{ marginRight: 16 }}
              name="check-square-o"
              type="font-awesome"
              color={this.state.selectedWA ? "#3CD52E" : "#F0F0F0"}
            />
            <Text>Agree to receive Whatsapp notifications</Text>
          </View>
        </View>

        {/* Button */}
        <Button
          title="Confirm Details"
          onClick={() => this.props.navigation.navigate("Otp")}
        />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: "#fff",
    marginTop: -16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  grnContainer: {
    marginTop: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: 400,
    padding: 40,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    padding: 5,
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: 1,
    fontSize: 16,
    color: "#fff",
  },
  description: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 30,
    opacity: 0.7,
  },
  btn: {
    alignSelf: "center",
    width: 250,
    textAlign: "center",
    padding: 20,
    backgroundColor: "#3CD52E",
    borderRadius: 10,
    marginBottom: 10,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  tncContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: -20,
    width: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  tncCol: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

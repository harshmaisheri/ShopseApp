import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

import FormInput from "../components/FormInput";
import TopBanner from "../components/TopBanner";
import Button from "../components/Button";

export default class Form extends React.Component {
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
        ></Image>
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
      <React.Fragment>
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
              style={{ marginRight: "1rem" }}
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
              style={{ marginRight: "1rem" }}
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
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: "#fff",
    marginTop: "-1rem",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  grnContainer: {
    marginTop: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "50vh",
    padding: 40,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: "5px",
  },
  input: {
    padding: "5px",
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: 1,
    fontSize: 16,
    color: "#fff",
  },
  description: {
    fontSize: 12,
    color: "#fff",
    marginBottom: "30px",
    opacity: 0.7,
  },
  btn: {
    alignSelf: "center",
    width: "250px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#3CD52E",
    borderRadius: 10,
    marginBottom: "10px",
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  tncContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: 20,
    width: "100%",
    marginTop: "-3rem",
    marginBottom: "1rem",
    shadowColor: "#000",
  },
  tncCol: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
});

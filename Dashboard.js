import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import TotalAsset from "./total-asset";
import { Trail, Spring, Transition } from "react-spring/dist/native";
import styled from "styled-components";
import Property from "./Property.js";
import { FontAwesome } from "@expo/vector-icons";

const colorSet = {
  lightRed: "#E6829A",
  yellow: "#FFBD49",
  lightGreen: "#79C8A6",
  green: "#43B97C",
  red: "#F35E56",
  orange: "#FF8436",
  white: "#F5F8FA",
  lightBlue: "#82C6E6",
  blue: "#82AAE6"
};

const Card = styled.View`
  background: ${({ bgColor }) => colorSet[bgColor] || "#79C8A6"};
  border-radius: 14px;
  min-width: 90%;
  height: 400;
  overflow: hidden;
`;

const CardContent = styled.View`
  padding: ${props => (props.noPadding ? "0 0" : "40px 20px")};
  position: relative;
  flex: 1;
`;

const Section = styled.Text`
  font-size: 28px;
  color: #ffffff;
  opacity: 0.8;
  font-family: "poppins-bold";
`;

const TextValue = styled.Text`
  font-size: 44px;
  font-family: "poppins-bold";
  color: #ffffff;
`;

const SectionSet = ({ style, label, value, text, media, textStyle }) => (
  <View style={style}>
    <Section>{label}</Section>
    <TextValue style={{ ...textStyle }}>{value}</TextValue>
  </View>
);

const Month = ({ isActive }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
    {styles => (
      <CardContent style={styles}>
        <SectionSet label={"Monthly Digest"} value={"Average"} />
        <View marginTop={25} justifyContent="center" alignItems="center">
          <Image
            style={{ width: 235, height: 190 }}
            source={require("./assets/m-dig.png")}
          />
        </View>
      </CardContent>
    )}
  </Spring>
);

const Tips = ({ isActive }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
    {styles => (
      <CardContent style={{ ...styles }}>
        <View style={{ position: "absolute", bottom: 20, right: 30 }}>
          <Image
            style={{ width: 61, height: 99 }}
            source={require("./assets/light_bubble.png")}
          />
        </View>
        <SectionSet
          label={"Daily Tips"}
          textStyle={{ fontSize: 32 }}
          value={"Why Renting is Better than Buying?"}
        />
      </CardContent>
    )}
  </Spring>
);

const items = [];

items.push(
  <React.Fragment>
    <Card bgColor="white">
      <TotalAsset />
    </Card>
    <View style={{ marginTop: 40 }} />
  </React.Fragment>
);
items.push(
  <React.Fragment>
    <Card bgColor="green">
      <Month isActive />
    </Card>
    <View style={{ marginTop: 40 }} />
  </React.Fragment>
);
items.push(
  <React.Fragment>
    <Card bgColor="red">
      <Property isActive />
    </Card>
    <View style={{ marginTop: 40 }} />
  </React.Fragment>
);
items.push(
  <React.Fragment>
    <Card bgColor="blue">
      <Tips isActive />
    </Card>
    <View style={{ marginTop: 40 }} />
  </React.Fragment>
);

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        backdropOpacity={1}
        backdropColor="white"
        isVisible={this.props.modalIsOpen}
        contentLabel="Example Modal"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 40 }} />
          <Trail
            keys={items.map(item => Math.random())}
            from={{ marginLeft: -100 }}
            to={{ marginLeft: 0 }}
          >
            {items.map(item => styles => (
              <View style={{ ...styles }}>{item}</View>
            ))}
          </Trail>
          <TouchableOpacity onPress={this.props.onClosePress}>
            <View justifyContent="center" alignItems="center">
              <FontAwesome name="close" size={32} />
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 40 }} />
        </ScrollView>
      </Modal>
    );
  }
}

export default Dash;

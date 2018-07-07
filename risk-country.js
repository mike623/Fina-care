import React from "react";
import { Trail, Spring, Transition } from "react-spring/dist/native";
import styled from "styled-components";
import { Dimensions, View, Image, Text } from "react-native";

const Country = ({ con, percent }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Image style={{ width: 80, height: 80 }} source={conMap[con]} />
    <Text style={{ fontFamily: "poppins-bold", color: "#fff", fontSize: 36 }}>
      {percent}%
    </Text>
  </View>
);

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

const conMap = {
  can: require("./assets/can.png"),
  kr: require("./assets/kr.png"),
  us: require("./assets/us.png"),
  cn: require("./assets/cn.png")
};

export default isActive => (
  <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
    {styles => (
      <CardContent style={styles}>
        <Section style={{ marginBottom: 20 }}>Risk Country</Section>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Country con="cn" percent="60" />
          <Country con="can" percent="20" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Country con="us" percent="10" />
          <Country con="kr" percent="10" />
        </View>
      </CardContent>
    )}
  </Spring>
);

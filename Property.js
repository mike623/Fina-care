import React from "react";
import { Trail, Spring, Transition } from "react-spring/dist/native";
import styled from "styled-components";
import { Dimensions, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const colorSet = {
  lightRed: "#E6829A",
  yellow: "#FFBD49",
  lightGreen: "#79C8A6",
  green: "#43B97C",
  red: "#F35E56",
  orange: "#FF8436",
  white: "#F5F8FA"
};

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

const YellowWord = styled.Text`
  color: #fffb96;
  font-size: 72;
  font-family: poppins-bold;
`;

const SectionSet = ({ style, label, value, text, media }) => (
  <View style={style}>
    <Section>{label}</Section>
    <TextValue>{value}</TextValue>
  </View>
);

const CardContent = styled.View`
  padding: ${props => (props.noPadding ? "0 0" : "40px 20px")};
  position: relative;
  flex: 1;
`;

export default isActive => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
      {styles => (
        <CardContent
          style={{ ...styles, paddingTop: 40, paddingHorizontal: 20 }}
        >
          <SectionSet label={"Property Value"} value={"5,380,000"} />
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <YellowWord>1.5 k</YellowWord>
            <MaterialCommunityIcons
              name="arrow-up-thick"
              size={72}
              color="#fffb96"
            />
          </View>
          <View style={{ position: "absolute", bottom: 0, right: 30 }}>
            <Image
              style={{ width: 132, height: 129 }}
              source={require("./assets/house.png")}
            />
          </View>
        </CardContent>
      )}
    </Spring>
  );
};

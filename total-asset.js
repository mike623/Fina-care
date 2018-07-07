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

const DotSet = ({ color, name }) => (
  <View flexDirection="row" alignItems="center">
    <View
      style={{
        height: 19,
        width: 19,
        borderRadius: 100,
        backgroundColor: color,
        marginRight: 16
      }}
    />
    <Text>{name}</Text>
  </View>
);

export default isActive => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
      {styles => (
        <CardContent style={styles}>
          <Section style={{ marginBottom: 20, color: "#9BA4AC" }}>
            Total Asset
          </Section>

          <View justifyContent="center" alignItems="center" position="relative">
            <Image
              style={{ width: 201, height: 201 }}
              source={require("./assets/asset-report.png")}
            />
            <View
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              justifyContent="center"
              alignItems="center"
            >
              <Text style={{ fontSize: 32, fontFamily: "poppins-bold" }}>
                6.3m
              </Text>
            </View>
          </View>
          <View
            marginTop={24}
            justifyContent="center"
            flexDirection="row"
            width="100%"
          >
            <View style={{ width: "80%" }}>
              <View flexDirection="row">
                <DotSet name="Bonds" color="#568CF7" />
                <View style={{ width: 32 }} />
                <DotSet name="Equity" color="#EC6066" />
              </View>
              <View style={{ height: 16 }} />
              <View flexDirection="row">
                <DotSet name="Funds" color="#F7C043" />
                <View style={{ width: 32 }} />
                <DotSet name="Deposits" color="#00C4A1" />
              </View>
            </View>
          </View>
        </CardContent>
      )}
    </Spring>
  );
};

import React, { Component } from "react";
import Carousel from "react-native-snap-carousel";
import { Trail, Spring, Transition } from "react-spring/dist/native";
import { Dimensions, View, Image, Text } from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var { height, width } = Dimensions.get("window");

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

const SectionSet = ({ style, label, value, text, media, textStyle }) => (
  <View style={style}>
    <Section>{label}</Section>
    <TextValue style={{ ...textStyle }}>{value}</TextValue>
  </View>
);

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

const allItems = [];

// D tips1
allItems.push({
  type: "lightGreen",
  render: isActive => {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
        {styles => (
          <CardContent noPadding style={{ ...styles }}>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                paddingVertical: 16,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#61A386",
                  fontFamily: "poppins-bold",
                  fontSize: 36
                }}
              >
                FIXED DEPOSIT
              </Text>
            </View>
            <View style={{ padding: 16 }}>
              <SectionSet label="Expected Return" value={"2%"} />
              <SectionSet label="Low Risk" value={"0%"} />
            </View>
          </CardContent>
        )}
      </Spring>
    );
  }
});

// D tips2
allItems.push({
  type: "orange",
  render: isActive => {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
        {styles => (
          <CardContent noPadding style={{ ...styles }}>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                paddingVertical: 16,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#FF8436",
                  fontFamily: "poppins-bold",
                  fontSize: 36
                }}
              >
                PUBLIC UTILIES
              </Text>
            </View>
            <View style={{ padding: 16 }}>
              <SectionSet label="Expected Return" value={"4%"} />
              <SectionSet label="Medium Risk" value={"8%"} />
            </View>
          </CardContent>
        )}
      </Spring>
    );
  }
});

// D tips3
allItems.push({
  type: "red",
  render: isActive => {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
        {styles => (
          <CardContent noPadding style={{ ...styles }}>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                paddingVertical: 16,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#D12828",
                  fontFamily: "poppins-bold",
                  fontSize: 36
                }}
              >
                EQUITY BASKET
              </Text>
            </View>
            <View style={{ padding: 16 }}>
              <SectionSet label="EQUITY BASKET" value={"2%"} />
              <SectionSet label="High Risk  " value={"15%"} />
            </View>
          </CardContent>
        )}
      </Spring>
    );
  }
});

export default class MyCarousel extends Component {
  state = {
    slideIndex: 0
  };
  showed = [0];
  _renderItem = ({ item: x, index, slideIndex }) => {
    const isActive = !!~this.showed.indexOf(index);
    // const isActive = slideIndex === index;
    return (
      <Card style={{ ...x.style }} bgColor={x.type}>
        {x.render(isActive)}
      </Card>
    );
  };
  onSnapToItem = slideIndex => {
    this.showed = this.showed.concat(slideIndex);
    this.setState({ slideIndex });
  };
  render() {
    const items = allItems;
    return (
      <Carousel
        onSnapToItem={this.onSnapToItem}
        ref={c => {
          this._carousel = c;
        }}
        data={allItems}
        renderItem={p =>
          this._renderItem({ ...p, slideIndex: this.state.slideIndex })
        }
        sliderWidth={width}
        itemWidth={width * 0.8}
      />
    );
  }
}

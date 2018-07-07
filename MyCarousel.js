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

// // TOTAL ASSET
allItems.push({
  type: "white",
  style: {
    borderWidth: 1,
    borderColor: "#7B8994"
  },
  render: require("./total-asset").default
});

// # liny
allItems.push({
  type: "lightRed",
  render: isActive => {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
        {styles => (
          <CardContent style={{ ...styles }}>
            <View
              style={{
                position: "absolute",
                bottom: 20,
                right: 30,
                justifyContent: "center"
              }}
            >
              <Image
                style={{ width: 279, height: 57 }}
                source={require("./assets/wave.png")}
              />
            </View>
            <SectionSet
              label={"Liquidity"}
              textStyle={{ fontSize: 32 }}
              value={"Medium"}
            />
          </CardContent>
        )}
      </Spring>
    );
  }
});

// # Risk Country
allItems.push({
  type: "yellow",
  render: require("./risk-country").default
});

// // ＃Monthly Digest
// allItems.push({
//   type: "green",
//   render: isActive => {
//     return (
//       <Spring from={{ opacity: 0 }} to={{ opacity: isActive ? 1 : 0 }}>
//         {styles => (
//           <CardContent style={styles}>
//             <SectionSet label={"Monthly Digest"} value={"Average"} />
//             <View marginTop={25} justifyContent="center" alignItems="center">
//               <Image
//                 style={{ width: 235, height: 190 }}
//                 source={require("./assets/m-dig.png")}
//               />
//             </View>
//           </CardContent>
//         )}
//       </Spring>
//     );
//   }
// });

export class MyCarousel extends Component {
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

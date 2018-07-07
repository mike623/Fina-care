import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Constants, Font, Speech } from "expo";
import styled from "styled-components";

// You can import from local files
import AssetExample from "./components/AssetExample";

import Faded from "./components/Fade";
import { Trail, Spring, Transition } from "react-spring/dist/native";
import { Badge } from "react-native-elements";

var { height, width } = Dimensions.get("window");

import { DashButton } from "./DashButton";

import { TextButton } from "./TextButton";

import { RecButton } from "./RecButton";

import { MyCarousel } from "./MyCarousel";
import MyCarousel2 from "./MyCarousel2";
import Dash from "./Dashboard";

const colorSet = {
  lightRed: "#E6829A",
  yellow: "#FFBD49",
  lightGreen: "#79C8A6",
  green: "#43B97C",
  red: "#F35E56",
  orange: "#FF8436"
};

const WidgetSection = styled.View``;

const FeedBackSection = styled.View`
  flex: 1;
  background: red;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const MyText = styled.Text`
  color: ${props => (props.mind ? "#20CBAD" : "#3A444C")};
  font-size: 36;
  text-align: center;
`;

const Spacer = styled.View`
  height: 40;
`;

const stepComponents = [];
stepComponents.push({
  key: "0",
  word: "How can we help you today?",
  render: styles => {
    return (
      <View
        style={{ ...styles, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <Image source={require("./assets/face.png")} />
        </View>
        <MyText> How can I help you today? </MyText>
      </View>
    );
  }
});

stepComponents.push({
  key: 1,
  render: styles => {
    return (
      <View
        style={{
          ...styles,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20
        }}
      >
        <Image
          style={{ marginVertical: 20 }}
          source={require("./assets/divide-line.png")}
        />
        <MyText mind>Hi Fina. What is my portfolio composition?</MyText>
      </View>
    );
  }
});

stepComponents.push({
  key: 2,
  word:
    "Hi Eric, the total asset value is 6.3 million Hong Kong dollars. 80% of your asset could be liquidated within 1 week. These are the country risks of your portfolio.",
  render: styles => {
    return (
      <View style={{ ...styles, alignItems: "center", height: 450 }}>
        <Image
          style={{ marginVertical: 20 }}
          source={require("./assets/divide-line.png")}
        />
        <WidgetSection>
          <MyCarousel />
        </WidgetSection>
      </View>
    );
  }
});

stepComponents.push({
  key: 3,
  render: styles => {
    return (
      <View style={{ ...styles, alignItems: "center", paddingHorizontal: 20 }}>
        <Image
          style={{ marginVertical: 20 }}
          source={require("./assets/divide-line.png")}
        />
        <MyText mind>
          Fina, I have some bonds going to mature soon, what should I do?
        </MyText>
      </View>
    );
  }
});

stepComponents.push({
  key: 4,
  word:
    "Hi, Eric. Depends on your risk appetite, the following options can be considered. Fixed Deposit with low risk, Public Utility Equity with medium risk and Equity Basket with high risk.",
  render: styles => {
    return (
      <View style={{ ...styles, alignItems: "center", height: 450 }}>
        <Image
          style={{ marginVertical: 20 }}
          source={require("./assets/divide-line.png")}
        />
        <WidgetSection>
          <MyCarousel2 />
        </WidgetSection>
      </View>
    );
  }
});

// stepComponents.push({
//   key: 4,
//   render: styles => {
//     return (
//       <View style={{ ...styles, alignItems: "center", height: 450 }}>
//         <Image
//           style={{ marginVertical: 20 }}
//           source={require("./assets/divide-line.png")}
//         />
//         <WidgetSection>
//           <MyCarousel2 />
//         </WidgetSection>
//       </View>
//     );
//   }
// });

export default class App extends Component {
  state = {
    fontLoaded: false,
    talks: [],
    step: 0,
    showControl: true,
    modalIsOpen: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
    this.sayIt(stepComponents[0].word);
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const isNextWord = prevState.word !== this.state.word;
  //   if (isNextWord) {
  //     this.sayIt(this.state.word);
  //   }
  // }
  sayIt(word) {
    Speech.speak(word, {
      language: "en",
      pitch: 1.5,
      rate: 1
    });
  }
  handlePress = () => {
    this.setState(
      {
        showControl: false
      },
      () => {
        // talk
        // setTimeout(this.nextStep, 5000);
        if (this.state.step === 0) {
          setTimeout(this.nextStep, 5000);
        } else if (this.state.step === 2) {
          setTimeout(this.nextStep, 5000);
        }
      }
    );
  };
  nextStep = () => {
    // TODO: auto repond wording?
    this.setState(
      p => ({
        step: ++p.step,
        showControl: true
      }),
      () => {
        const word = stepComponents[this.state.step].word;
        if (word) {
          this.sayIt(word);
        }
      }
    );
    setTimeout(() => {
      this.scroll.scrollToEnd();
      this.autoNext();
    }, 500);
  };
  autoNext = () => {
    const shouldNext = [1, 3];
    if (!!~shouldNext.indexOf(this.state.step)) {
      if (this.state.step === 1) {
        setTimeout(this.nextStep, 1000);
      } else if (this.state.step === 3) {
        setTimeout(this.nextStep, 3000);
      }
    }
  };
  render() {
    if (!this.state.fontLoaded) return null;
    // const talks = this.state.talks
    const talks = stepComponents.filter(
      (item, index) => index <= this.state.step
    );
    return (
      <View style={styles.container}>
        <Dash
          modalIsOpen={this.state.modalIsOpen}
          onClosePress={() =>
            this.setState({
              modalIsOpen: false
            })
          }
        />
        <ScrollView
          ref={ref => (this.scroll = ref)}
          showsVerticalScrollIndicator={false}
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spacer />
          <Transition
            keys={talks.map(item => item.key)}
            from={{ opacity: 0, marginTop: -30 }}
            enter={{ opacity: 1, marginTop: 0 }}
          >
            {talks.map(item => styles => item.render(styles))}
          </Transition>

          <Spacer />
        </ScrollView>

        <View
          style={{
            height: "20%",
            backgroundColor: "#F5F8FA",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.state.showControl && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <TextButton />
              <View style={{ width: 30 }} />
              <RecButton onPress={this.handlePress} />
              <View style={{ width: 30 }} />
              <DashButton
                onPress={() =>
                  this.setState({
                    modalIsOpen: true
                  })
                }
              />
            </View>
          )}
          {!this.state.showControl && (
            <View>
              <Image
                style={{ width: 128, height: 50 }}
                source={require("./assets/voice-wave.gif")}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  }
});

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

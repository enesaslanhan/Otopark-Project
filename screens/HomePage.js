import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 15 }}>
          <Text style={{ fontSize: 25, letterSpacing: 1, fontWeight: "400" }}>
            My Debts
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <View style={styles.box} key={index}>
            <View
              style={{
                width: "10%",
                height: "100%",
                backgroundColor: "#f9b012",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "white",
                  borderRadius: 100,
                  borderColor: "white",
                }}
              ></View>
            </View>
            <View
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: "#fff",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  padding: 10,
                  width: "95%",
                  borderBottomWidth: 1,
                  height: "30%",
                }}
              >
                <Text
                  style={{ fontSize: 18, letterSpacing: 1, fontWeight: 400 }}
                >
                  İstanbul / Esenler
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "70%",
                  flexDirection: "row",
                  padding: 5,
                }}
              >
                <View style={{ width: "80%", height: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      height: "26%",
                    }}
                  >
                    <Text style={{ fontSize: 16, letterSpacing: 1 }}>
                      19/07/2024 - 20/07/2024
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "74%",
                      flexDirection: "row",
                      padding: 2,
                    }}
                  >
                    <View
                      style={{
                        width: "50%",
                        height: "100%",
                        alignItems: "center",
                        fontWeight: 500,
                      }}
                    >
                      <Text>Total length of stay</Text>
                      <Text style={{ marginTop: 10, color: "gray" }}>
                        1 day 3 hours
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "50%",
                        height: "100%",
                        borderLeftWidth: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text>price to be paid</Text>
                      <Text style={{ marginTop: 10, color: "gray" }}>
                        255 TL
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "20%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../assets/payment.png")}
                    style={{ height: 45, width: 45 }}
                  />
                </View>
              </View>
            </View>
          </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  box: {
    width: "90%",
    height: 150,
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
  },
});

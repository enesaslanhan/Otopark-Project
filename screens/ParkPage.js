import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownSelect from "react-native-input-select";
import { ThemedButton } from "react-native-really-awesome-button";
import BaseButton from "../components/BaseButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ParkPage = () => {
  const mapRef = useRef(null);
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [latitude, setLatitude] = useState(41.0542);
  const [longitude, setLongitude] = useState(28.8676);
  const [active, SetActive] = useState(false);
  const[cityQuota,setCityQuota]=useState();
  const navigation = useNavigation();
  const istanbul = [
    {
      label: "Esenler",
      value: "1",
      latitude: 41.0354226,
      longitude: 28.8879464,
      quota:250,
    },
    {
      label: "Bağcılar",
      value: "2",
      latitude: 41.038271,
      longitude: 28.8548311,
      quota:230,
    },
    { label: "Fatih", value: "3", latitude: 40.9950149, longitude: 28.9282732,quota:185,
    },
    // Add more options as needed
  ];
  const ankara = [
    {
      label: "Kızılay",
      value: "1",
      latitude: 39.9229566,
      longitude: 32.8460282,
      quota:298,
    },
    {
      label: "Keçiören",
      value: "2",
      latitude: 40.086671,
      longitude: 32.6555051,
      quota:175,
    },
    // Add more options as needed
  ];
  const cities = [
    { label: "İstanbul", value: "1" },
    { label: "Ankara", value: "2" },
  ];

  const handleProgress = (release) => {
    setTimeout(() => {
      setLatitude(39.9035233);
      setLongitude(32.5979541);
      if (city == 1) {
        mapRef.current.animateToRegion(
          {
            latitude: istanbul[district - 1].latitude,
            longitude: istanbul[district - 1].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          1000
        );
        setCityQuota(istanbul[district-1].quota)
      } else {
        mapRef.current.animateToRegion(
          {
            latitude: ankara[district - 1].latitude,
            longitude: ankara[district - 1].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          1000
        );
        setCityQuota(ankara[district-1].quota)
      }
      
      release();
    }, 1000);
  };
  const IsActive=()=>{
    active==false?SetActive(true):SetActive(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground style={styles.image}>
          <Text style={{marginTop:10}}>{cityQuota}</Text>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {istanbul.map((element, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: element.latitude,
                  longitude: element.longitude,
                }}
                title={element.label}
              >
                <Image
                  source={require("../assets/park.png")}
                  style={{ height: 35, width: 35 }}
                />
              </Marker>
            ))}
            {ankara.map((element, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: element.latitude,
                  longitude: element.longitude,
                }}
                title={element.label}
              >
                <Image
                  source={require("../assets/park.png")}
                  style={{ height: 35, width: 35 }}
                />
              </Marker>
            ))}
          </MapView>
          {!active&&<View style={{ width: "100%", marginTop: 40,alignItems:"center" }}>
            <View style={{ width: "70%" }}>
              <DropdownSelect
                options={cities}
                placeholder="Please Select City"
                optionLabel={"label"}
                optionValue={"value"}
                dropdownErrorStyle={{
                  borderColor: "red",
                  borderWidth: 2,
                  borderStyle: "solid",
                }}
                dropdownStyle={{
                  marginTop: 20,
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "orange",
                }}
                selectedItemStyle={{
                  fontSize: 18,
                  fontWeight: "400",
                  letterSpacing: 2,
                  color:"white"
                }}
                selectedValue={city}
                onValueChange={(itemValue) => setCity(itemValue)}
              />
            </View>
            <View style={{ width: "70%" }}>
              <DropdownSelect
                options={
                  city != null
                    ? city === cities[0].value
                      ? istanbul
                      : ankara
                    : null
                }
                placeholder="Please Select District"
                optionLabel={"label"}
                optionValue={"value"}
                dropdownErrorStyle={{
                  borderColor: "red",
                  borderWidth: 2,
                  borderStyle: "solid",
                }}
                dropdownStyle={{
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "white",
                  backgroundColor: "orange",
                }}
                selectedItemStyle={{
                  fontSize: 18,
                  fontWeight: "400",
                  letterSpacing: 2,
                  color: "white",
                }}
                selectedValue={district}
                onValueChange={(itemValue) => setDistrict(itemValue)}
              />
            </View>
            <View style={{ width: "80%", alignItems: "center", marginTop: 10 }}>
              <ThemedButton
                progress
                name="bruce"
                type="danger"
                onPress={handleProgress}
                style={styles.button}
              >
                Search
              </ThemedButton>
            </View>
            <View
              style={{
                alignItems: "center",
                width: "80%",
                height: 100,
                backgroundColor: "black",
                marginTop: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  letterSpacing: 1,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Let's choose a parking place
              </Text>
              <AntDesign
                name="arrowright"
                size={40}
                color="white"
                onPress={() => SetActive(true)}
              />
            </View>
          </View>}
          {active&&
          <View style={{ width: "100%", marginTop: 40,alignItems:"center"}}>
              <AntDesign
                name="arrowleft"
                size={40}
                color="black"
                onPress={() => SetActive(false)}
              />
              <Text style={{}}>{cities[city-1].label}/{}</Text>
              <View style={{width:"80%",height:320,borderWidth:1,borderRadius:10}}>

              </View>
          </View>}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ParkPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "30%",
    marginTop: 50,
  },
});

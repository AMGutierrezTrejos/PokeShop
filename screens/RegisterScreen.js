import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      email: email,
      name: name,
      password: password,
    };

    // send POST request to register user to database
    axios
    .post("http://localhost:8000/register", user)
    .then((response) => {
      console.log(response);
      Alert.alert(
        "Registration successful",
        "You have been registered Successfully"
      );
      setName("");
      setEmail("");
      setPassword("");
    })
    .catch((error) => {
      Alert.alert(
        "Registration Error",
        "An error occurred while registering"
      );
      console.log("registration failed", error);
    });
};
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <View>
        <Image
          style={{ width: 250, height: 120 }}
          source={{
            uri: "https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register a new account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="catching-pokemon"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter Your Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <FontAwesome5
              style={{ marginLeft: 8 }}
              name="user-astronaut"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter Your Name"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 8 }}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "blue", fontWeight: "500" }}>
            Forgot Password?
          </Text>
        </View>

        <View style={{ marginTop: 60 }} />
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FF0000",
            borderRadius: 40,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack("Login")}>
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              fontSize: 13,
              marginTop: 10,
            }}
          >
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});

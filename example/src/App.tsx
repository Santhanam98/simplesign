import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

export default function Loginauth(props: { username: string; password: string }) {
  const { username, password } = props;


  return (
    <SafeAreaView style={styles.container} >

      <Text style={styles.welcome_text} >Welcome's You</Text>
      <Text style={styles.title_text} >User Name</Text>

      <View style={styles.input_container} >
        <TextInput
          placeholder='enter user name'
          style={styles.input_text_style}
          value={username}
        />
      </View>


      <Text style={styles.title_text} >Password</Text>

      <View style={styles.input_container} >
        <TextInput
          placeholder='enter password'
          style={styles.input_text_style}
          value={password}

        />
      </View>



      <Pressable onPress={() => console.log("HIIIIIIIIIIIIIIII")} style={styles.button_container} >
        <Text style={styles.button_text} >Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"

  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  welcome_text: {
    color: "#000",
    marginTop: "20%",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500"
  },
  title_text: {
    color: "#000",
    marginTop: "5%",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: "10%"
  },
  input_container: {
    width: "90%",
    alignSelf: "center",
    padding: "4%",
    backgroundColor: "#eeeeee",
    marginTop: "2.5%",
    borderRadius: 100
  },
  input_text_style: {
    fontSize: 15,
    color: "#000"
  },
  button_container: {
    width: "90%",
    alignSelf: "center",
    padding: "4%",
    backgroundColor: "#2196f3",
    marginTop: "10%",
    borderRadius: 100,
  },
  button_text: {
    alignSelf: "center",
    fontSize: 18,
    color: "#fff",
  }

});

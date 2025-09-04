import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const age = 22;
  const licenseyears= 0;
  let feedback = '';

  <View>
    <Image source={require("./assets/car-lambo.jpg")}
    resizeMode="contain"
    style={{width:200, height:300, marginTop:20}}

    />
  </View>


  if (age >= 18)
    if (licenseyears >= 3 ) 
    {
      feedback = 'You are not qualified, safe driver.';
    }
    else
    {
    feedback = 'You are allowed to drive. YAY!'
    } else 
  {


    feedback = 'You are not allowed to drive. HELL NAA '
  }


  return (
    <View style={styles.container}>
      <Text style ={styles.response}>
        {feedback} {/* This message to be displayed to the user */}


      </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
  }
});

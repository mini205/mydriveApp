import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const age = 20;
  const licenseyears= 5;
  let feedback = '';

 

  if (age >= 18)
    if (licenseyears >= 3 ) 
    {
      feedback = 'You are a qualified, safe driver.';
    }
    else
    {
    feedback = 'You are allowed to drive. YAY!'
    } else 
  {


    feedback = 'You are not allowed to drive. HELL NAA '
  }


  return (
    <SafeAreaView style={styles.container}>
    <View>
      {/* Add a custom and other text compoent specific styles to the heading */ }
      <Text style={[styles.response, {fontSize:48, color:'yellow', marginBottom:35, textAlign:'center'}]}>
        Driving License Checker
        </Text>

        {/*Our Image*/}
      <Image source={{uri:'https://media.gettyimages.com/id/975871504/nl/foto/hatfield-united-kindom-the-lamborghini-huracan-performante-this-car-was-part-of-essendon.jpg?s=612x612&w=gi&k=20&c=9PnoG8qaA1i9OpQITzt2vMdsdEn5HDeUl7oyLAciRng=',}}
      style= {styles.image}></Image>
      <Text style={styles.response}>Age: {age}</Text>
      <Text style={styles.response}>License Years: {licenseyears}</Text>
      <Text style={[styles.response, {fontSize:48, color:'orange', marginBottom:35, textAlign:'center'}]}>
      {feedback} {/* This message to be displayed to the user */}
      </Text>


      
       


      
      
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width:'100%',
    alignItems:'center'
  },

  response: {
    fontSize: 28,
    color:'white',
    fontWeight: 'bold',
    marginVertical:30
  },
  image: {
    width:500,
    height:300,
    resizeMode:'contain'
  }

 
});

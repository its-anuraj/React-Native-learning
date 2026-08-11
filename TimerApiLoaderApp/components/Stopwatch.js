import {View,Text,StyleSheet, Alert, TouchableOpacity} from "react-native";
import { useState,useEffect } from "react";


const Stopwatch=()=>{
  const[count,setCount]=useState(1);


  useEffect(()=>{
    if(count%5==0){
    Alert.alert("Awesome!", "Count 5 ka multiple ban gaya");
    }

  },[count]);

  return (
    <View style={styles.card}>
      <Text  style={styles.countText}>Count:{count}</Text>
      <TouchableOpacity  onPress={()=>setCount(prev=>prev+1)}>
       <Text>CLICK</Text>       
      </TouchableOpacity>
    </View>
  );



  
};

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#0F172A', borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  countText: { color: '#4ADE80', fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
export default Stopwatch;
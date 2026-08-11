import {View,Text,StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';



const LiveClock =()=>{
  const[time,setTime]=useState(new Date().toLocaleDateString());
  useEffect(()=>{
      const timerId=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
      },1000);

      return ()=>clearInterval(timerId);
  },[]);

  return (

    <View style={styles.card}>
      <Text style={styles.title}> Live Clock </Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

const styles=StyleSheet.create({

  card:{
    padding:15,
    backgroundColor:'#1E293B',
    borderRadius:10,
    alignItems:'center'
  },
  title:{
    color:'#94A3B8',
    fontSize:14
  },
  timeText:{
    color:'#38BDF8',
    fontSize:24,
    fontWeight:'bold'
  }

})

export default LiveClock;


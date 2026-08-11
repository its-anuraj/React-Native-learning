import axios from "axios";

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const ApiPostLoader =()=>{
  const[post,setPost]=useState(null);
  const[loading,setLoading]=useState(true);
useEffect(()=>{
 
  const LoadData=async()=>{
     setLoading(true);
    try{
        await new Promise((resolve) => setTimeout(resolve, 2000));
  const response= await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  setPost(response.data);
    }
    catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };
  LoadData();
},[]);

return (

<View style={styles.card}>
      {loading ? (
        <ActivityIndicator size="large" color="#6366F1" />
      ) : (
        <View>
          <Text style={styles.title}>Post #1: {post?.title}</Text>
          <Text style={styles.body}>{post?.body}</Text>
        </View>
      )}
    </View>
  );

;}

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#1E293B', borderRadius: 10, marginVertical: 10 },
  title: { color: '#F8FAFC', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  body: { color: '#94A3B8', fontSize: 13 }
});
export default ApiPostLoader;
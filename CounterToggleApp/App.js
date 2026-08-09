import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet ,TextInput} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [isVisible,setIsVisible] =useState(false);
  const [bgColor, setBgColor] = useState('#fff');
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Khud se random color generate karta hai — koi list nahi!
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };



  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.countText}>{count}</Text>

      {isVisible && <Text style={styles.toggleText}>Hello! Main toggle text hoon 👋</Text>}

      <TouchableOpacity style={styles.btn} onPress={() => setIsVisible(!isVisible)}>
        <Text>{isVisible ? "Hide text" : "Show Text"}</Text>
      </TouchableOpacity>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Enter Your Name'
        
      />

      <TouchableOpacity style={styles.btn} onPress={() => setGreeting(`Namaste, ${name}! 👋`)}>
        <Text style={styles.btnText}>👋</Text>
      </TouchableOpacity>

      {greeting ? <Text style={styles.toggleText}>{greeting}</Text> : null}

        <TouchableOpacity style={styles.btn} onPress={() => setBgColor(getRandomColor())}>
          <Text style={styles.btnText}>🎨</Text>
        </TouchableOpacity>


      <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(count - 1)}>
        <Text style={styles.minus}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(0)}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  countText: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  btn: {
    backgroundColor: '#6C63FF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
  },
  btnText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },

    minus:{
      color:'white',
      fontSize:42,
      fontWeight:"bold",

    },

    reset:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
    },

    toggleText: {
      fontSize: 18,
      color: '#6C63FF',
      fontWeight: '600',
      marginBottom: 12,
    },
  
});
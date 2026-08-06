# React Native — 15 Din ka Complete Learning Plan
## Tutor Mode ON — Main samjhaunga, kaam tumse karana hai!

---

## Rules of This Plan
- Roz ek naya topic group seekhna hai
- Har group ke liye alag chhoti app banani hai
- Dusre din shuru karne se pehle previous day ka review hoga
- Daily 10 Interview Questions (tutor puchega, tum jawab doge)
- Tutor pehle samjhayega phir tum code khud likhoge
- Mix mat karna — ek app ek topic group ke liye

---

## 15-Day Overview

| Day | Topics | Practice App |
|-----|--------|-------------|
| 1 | JSX, Components, Props | Profile Card App |
| 2 | State, useState, Events | Counter + Toggle App |
| 3 | useEffect, Lifecycle | Timer + API Loader App |
| 4 | Core RN Components | Component Showcase App |
| 5 | Styling + Flexbox | Layout Designer App |
| 6 | FlatList + SectionList | Contact Book App |
| 7 | React Navigation (Stack + Tab) | 3-Screen Navigation App |
| 8 | Navigation (Drawer + Params) | Product Menu App |
| 9 | API Integration (Axios) | Posts Manager App |
| 10 | Custom Hooks + useRef + useMemo | Smart Search App |
| 11 | Context API + Global State | Shopping Cart App |
| 12 | AsyncStorage + Forms | Notes Saver App |
| 13 | Authentication Flow | Login → Home Flow App |
| 14 | Animations | Animated Cards App |
| 15 | Performance + Build + Revision | Final Review |

---

# DAY 1 — JSX, Components, Props

## Aaj Kya Seekhenge?
- JSX kya hai (HTML jaisa syntax React ka)
- Functional Components kaise banate hain
- Props kya hote hain (parent to child data)
- Component ko reuse kaise karte hain

## THEORY — Tutor Samjhayega

### JSX kya hai?
JSX ek syntax hai jo HTML jaisa dikhta hai lekin JavaScript mein hota hai.

```jsx
const element = <Text>Hello World</Text>;
```

### Functional Component
```jsx
const MyComponent = () => {
  return <Text>Namaste!</Text>;
};
```

### Props — Data pass karna
```jsx
// Parent component
const App = () => {
  return <UserCard name="Rahul" age={25} city="Delhi" />;
};

// Child component (destructuring wala better way)
const UserCard = ({ name, age, city }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age} saal</Text>
      <Text>{city}</Text>
    </View>
  );
};
```

### Default Props
```jsx
const UserCard = ({ name = "Anonymous", age = 0 }) => {
  return <Text>{name} - {age}</Text>;
};
```

## PRACTICE APP — Profile Card App

### App ka Goal:
- Ek `ProfileCard` component banao
- Card mein naam, profession, location, aur bio dikhao
- 3 alag ProfileCard display karo (3 alag logon ke)
- Props se saara data pass ho (hardcoded nahi)

### Folder Structure:
```
ProfileCardApp/
+-- App.js
+-- components/
    +-- ProfileCard.js
```

### Tumhara Task (Khud karo):
1. npx create-expo-app ProfileCardApp banao
2. components/ProfileCard.js file banao
3. ProfileCard ko props accept karwao
4. App.js mein 3 ProfileCard use karo alag data se
5. Thodi styling lagao

## DAY 1 — 10 Interview Questions
```
Q1.  JSX kya hai aur React Native mein kyun use karte hain?
Q2.  Component aur Element mein kya fark hai?
Q3.  Props kya hote hain? Kya props mein function bhi pass kar sakte hain?
Q4.  Props ko child se parent mein change kar sakte hain kya? Kyun?
Q5.  Functional Component aur Class Component mein kya fark hai?
Q6.  Destructuring kya hai? Props mein kaise use karte hain?
Q7.  Default props kaise set karte hain?
Q8.  Kya ek component ke andar doosra component ho sakta hai?
Q9.  `key` prop kya hota hai aur kab zaroori hota hai?
Q10. JSX mein JavaScript expression kaise likhte hain?
```

---

# DAY 2 — State, useState, Event Handling

## Previous Day Review (Pehle Yeh Karo)
- ProfileCard component review karo
- Props ka concept explain karo apne words mein
- Day 1 ke 3 random questions dobara jawab do

## Aaj Kya Seekhenge?
- State kya hai (component ka apna data)
- useState Hook kaise use karte hain
- Events handle karna (onPress, onChangeText)
- State update hone pe re-render kaise hota hai

## THEORY

### State vs Props
```
Props  → Bahar se aata hai (read-only)
State  → Andar ka data hai (khud change kar sakte hain)
```

### useState Hook
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
};
```

### Important Rule
```jsx
// GALAT — Direct mutation
count = count + 1;

// SAHI — setter use karo
setCount(count + 1);

// SAHI — Previous value se update karna (best practice)
setCount(prev => prev + 1);
```

## PRACTICE APP — Counter + Toggle App
- Counter: +/- buttons, Reset button
- Toggle: Show/Hide text button
- Color Changer: Button se background color badle
- Mini Form: Name likho, "Namaste naam!" show ho

## DAY 2 — 10 Interview Questions
```
Q1.  State aur Props mein main fark kya hai?
Q2.  useState hook mein initial value kya hoti hai?
Q3.  State directly kyu nahi badlte?
Q4.  Re-render kab hota hai React Native mein?
Q5.  Ek component mein kitne useState ho sakte hain?
Q6.  onPress aur onClick mein kya fark hai?
Q7.  TextInput mein value aur onChangeText kaise work karta hai?
Q8.  setState asynchronous hota hai — matlab kya?
Q9.  `prev => prev + 1` pattern kab use karte hain?
Q10. Boolean state toggle karne ka best way kya hai?
```

---

# DAY 3 — useEffect + Lifecycle

## Previous Day Review
- Counter App dekhao aur explain karo
- State vs Props fark batao
- 2 random Day 2 questions

## Aaj Kya Seekhenge?
- useEffect kya hai aur kab run hota hai
- Dependency array ka kaam
- Cleanup function kab lagani hai
- API call useEffect mein

## THEORY

### useEffect ke 3 Forms
```jsx
// 1. Har render ke baad
useEffect(() => {
  console.log('Har baar!');
});

// 2. Sirf pehli baar (mount pe)
useEffect(() => {
  console.log('Sirf ek baar!');
}, []);

// 3. Jab specific value change ho
useEffect(() => {
  console.log('count badla!');
}, [count]);
```

### Cleanup Function
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => clearInterval(timer); // Cleanup on unmount
}, []);
```

### API Call
```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);
```

## PRACTICE APP — Timer + API Loader App
- Stopwatch: Start/Stop/Reset
- API Section: JSONPlaceholder se posts fetch karo
- Live Clock: Asli time dikhao jo update ho

## DAY 3 — 10 Interview Questions
```
Q1.  useEffect kya hota hai?
Q2.  Dependency array [] aur [value] mein kya fark hai?
Q3.  Cleanup function kab return karte hain?
Q4.  useEffect mein async function directly kyun nahi likhte?
Q5.  Memory leak kab hota hai?
Q6.  Component mount aur unmount kya hota hai?
Q7.  Multiple useEffect ek component mein rakh sakte hain kya?
Q8.  Dependency array mein object daalna safe hai kya?
Q9.  fetch aur axios mein kya fark hai?
Q10. useEffect ki dependencies kab change karti hain?
```

---

# DAY 4 — Core RN Components

## Previous Day Review
- Timer App explain karo
- useEffect ke 3 use cases batao
- 2 random Day 3 questions

## Aaj Kya Seekhenge?
- View, Text, Image properly use karna
- TextInput ke saare props
- Modal kaise banate hain
- Alert, ActivityIndicator, SafeAreaView, KeyboardAvoidingView

## THEORY

### TextInput Important Props
```jsx
<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Kuch likho..."
  secureTextEntry={true}    // Password field
  multiline={true}          // Textarea
  keyboardType="email-address"
  returnKeyType="done"
  onSubmitEditing={handleSubmit}
  maxLength={100}
/>
```

### Modal
```jsx
const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setVisible(false)}
>
  <View style={styles.overlay}>
    <View style={styles.modalBox}>
      <Text>Hello Modal!</Text>
      <Button title="Band Karo" onPress={() => setVisible(false)} />
    </View>
  </View>
</Modal>
```

## PRACTICE APP — Component Showcase App
- TextInput: Email, Password, Multi-line textarea
- Image: Local + Remote URL image
- Modal: Button se popup open ho
- Alert: Confirm dialog
- Loading: ActivityIndicator toggle

## DAY 4 — 10 Interview Questions
```
Q1.  ScrollView aur FlatList mein kya fark hai?
Q2.  TextInput mein secureTextEntry kya karta hai?
Q3.  SafeAreaView kab use karte hain?
Q4.  Modal ke transparent prop ka kya kaam hai?
Q5.  ActivityIndicator ka animating prop kya karta hai?
Q6.  KeyboardAvoidingView kab lagate hain?
Q7.  Image component mein resizeMode ke options kya hain?
Q8.  Alert.alert() mein buttons array kaise kaam karta hai?
Q9.  TouchableOpacity aur Pressable mein kya fark hai?
Q10. onSubmitEditing kab use karte hain TextInput mein?
```

---

# DAY 5 — Styling + Flexbox

## Previous Day Review
- Koi bhi ek component Day 4 ka explain karo
- Modal ka code bina dekhe likho
- 2 random Day 4 questions

## Aaj Kya Seekhenge?
- StyleSheet.create() properly
- Flexbox mastery (Web se alag hai!)
- Responsive design (Dimensions API)
- Platform-specific styles

## THEORY — Flexbox

### WEB se RN mein Yeh Alag Hai!
```
Web mein:      flexDirection default = 'row'
React Native:  flexDirection default = 'column'
```

### Cheatsheet
```
flexDirection   → 'row' | 'column'
justifyContent  → main axis alignment
  'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
alignItems      → cross axis alignment
  'flex-start' | 'flex-end' | 'center' | 'stretch'
flex            → kitna space lena hai
flexWrap        → 'wrap' | 'nowrap'
gap             → items ke beech space
```

### Responsive + Platform
```jsx
import { Dimensions, Platform } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: width * 0.8,
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : undefined,
  },
});
```

## PRACTICE APP — Layout Designer App
- Card Layout: Avatar + Name ek row mein
- Grid Layout: 2x2 grid (flexWrap)
- Dashboard Layout: Header + 2 panels + bottom bar
- Responsive Box: Screen ka 80%
- Platform Styles: iOS shadow, Android elevation

## DAY 5 — 10 Interview Questions
```
Q1.  RN mein Flexbox ka default flexDirection kya hai?
Q2.  justifyContent aur alignItems mein kya fark hai?
Q3.  flex: 1 kya karta hai?
Q4.  StyleSheet.create() kyun better hai inline styles se?
Q5.  Android pe shadow kaise lagate hain?
Q6.  iOS pe shadow kaise lagate hain?
Q7.  position: 'absolute' kab use karte hain?
Q8.  Dimensions API kyun use karte hain?
Q9.  alignSelf kya karta hai?
Q10. gap property kab se support hoti hai RN mein?
```

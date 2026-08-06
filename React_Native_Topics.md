# ⚛️ React Native — Complete Topics Guide
> **Ek App Developer ke liye Compulsory & Common Topics**
> Language: Hinglish 🇮🇳

---

## 📋 Priority Order (Kya Pehle Seekho?)

```
1️⃣  Core React (Hooks, Components, Props, State)
2️⃣  Core RN Components + Styling (Flexbox)
3️⃣  Navigation (React Navigation)
4️⃣  API Integration (Axios + Async/Await)
5️⃣  State Management (Context → Redux)
6️⃣  Device Features + Permissions
7️⃣  Authentication + Storage
8️⃣  Build & Deployment
9️⃣  Performance + Testing
```

---

## 🔰 1. Core Fundamentals (Sabse Pehle Seekho)

> Yeh topics bina jaane RN nahi seekh sakte. React ka base hai yeh sab.

| Topic | Kya hai? | Status |
|-------|----------|--------|
| **JSX** | UI likhne ka syntax (HTML jaisa) | ⭐ Must |
| **Functional Components** | UI ke building blocks | ⭐ Must |
| **Props** | Parent se child ko data pass karna | ⭐ Must |
| **State** | Component ka apna internal data | ⭐ Must |
| **useState Hook** | State create aur update karna | ⭐ Must |
| **useEffect Hook** | Side effects handle karna (API calls, subscriptions) | ⭐ Must |
| **Event Handling** | Button press, input change handle karna | ⭐ Must |
| **Conditional Rendering** | Condition ke hisaab se UI dikhana | ⭐ Must |
| **List Rendering** | Array ko UI mein map karna | ⭐ Must |

### 📝 Example — useState
```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Badhao" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

---

## 🧱 2. Core React Native Components

> Yeh RN ke built-in components hain — inn ke bina koi bhi screen nahi banega.

### Basic Components
| Component | Use |
|-----------|-----|
| `View` | Container / Div jaisa |
| `Text` | Text dikhane ke liye |
| `Image` | Image dikhane ke liye |
| `TextInput` | Input field |
| `Button` | Simple button |
| `TouchableOpacity` | Custom clickable element with opacity effect |
| `Pressable` | Modern clickable element (recommended) |

### List Components
| Component | Use |
|-----------|-----|
| `ScrollView` | Chhoti lists ke liye scroll karna |
| `FlatList` | **Badi lists ke liye (performance better)** |
| `SectionList` | Sections wali list (jaise contacts app) |

### Other Important Components
| Component | Use |
|-----------|-----|
| `Modal` | Popup dialog |
| `ActivityIndicator` | Loading spinner |
| `Alert` | Native alert dialog |
| `SafeAreaView` | iPhone notch se bachne ke liye |
| `KeyboardAvoidingView` | Keyboard se UI hide na ho |
| `ImageBackground` | Background image |

### 📝 Example — FlatList
```jsx
const data = [
  { id: '1', name: 'Rahul' },
  { id: '2', name: 'Priya' },
];

<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

---

## 🎨 3. Styling (Flexbox + StyleSheet)

> RN mein CSS nahi hota, lekin Flexbox aur StyleSheet API use hoti hai.

### Key Concepts
- **StyleSheet.create()** — Styles define karne ka sahi tarika
- **Flexbox** — Layout ka main system (web se thoda alag)
- **Dimensions API** — Screen ka width/height lena
- **Platform API** — iOS aur Android ke liye alag style

### Flexbox Important Properties
```
flexDirection    → row | column (default: column — web se ulta!)
justifyContent   → main axis alignment
alignItems       → cross axis alignment
flex             → space distribute karna
flexWrap         → wrap hona ya nahi
gap              → items ke beech space
```

### 📝 Example — StyleSheet
```jsx
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
```

### Responsive Design
```jsx
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: width * 0.8,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
});
```

---

## 🗺️ 4. Navigation (React Navigation)

> **Sabse important library** — Bina navigation ke app kaise banega?

### Install karo
```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
```

### Types of Navigators
| Navigator | Use Case |
|-----------|----------|
| **Stack Navigator** | Screen pe screen push karna (Back button) |
| **Bottom Tab Navigator** | Neeche tabs wala app (WhatsApp jaisa) |
| **Drawer Navigator** | Side menu (hamburger menu) |
| **Top Tab Navigator** | Upar tabs (Instagram jaisa) |

### 📝 Example — Stack + Tab Navigator
```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
```

### Screen ke beech data pass karna
```jsx
// Navigate karte hue params bhejte hain
navigation.navigate('Details', { userId: 123, name: 'Rahul' });

// Doosri screen mein receive karna
const { userId, name } = route.params;
```

---

## 🌐 5. API Integration & Networking

> App ko backend se connect karna — Bahut important!

### Axios Setup
```bash
npm install axios
```

### 📝 Example — Axios with Async/Await
```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.example.com/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, error };
};
```

### Axios Instance (Best Practice)
```jsx
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

export default api;
```

---

## 💾 6. State Management

> Jab data bahut screens mein share karna ho tab use karte hain.

### Levels of State Management
```
Local State    → useState, useReducer (single component)
Global State   → Context API (simple apps)
Complex State  → Redux Toolkit / Zustand (large apps)
Server State   → React Query / TanStack Query
```

### Context API (Simple Global State)
```jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

### Redux Toolkit
```bash
npm install @reduxjs/toolkit react-redux
```

### Zustand (Recommended)
```bash
npm install zustand
```

```jsx
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
```

---

## 🔗 7. React Hooks (Important Ones)

| Hook | Kab use karo |
|------|--------------|
| `useState` | Component mein data store karna |
| `useEffect` | API call, subscription, timer |
| `useContext` | Context se data lena |
| `useRef` | Input focus, previous value yaad rakhna |
| `useMemo` | Heavy calculation cache karna |
| `useCallback` | Function cache karna (re-render rokne ke liye) |
| `useReducer` | Complex state logic |

### 📝 Custom Hook Example
```jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

---

## 📱 8. Device Features (Native Integration)

### Camera
```bash
npm install expo-camera
```

### Location / GPS
```bash
npm install expo-location
```

```jsx
import * as Location from 'expo-location';

const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === 'granted') {
    const location = await Location.getCurrentPositionAsync();
    console.log(location.coords.latitude, location.coords.longitude);
  }
};
```

### AsyncStorage (Local Data)
```bash
npm install @react-native-async-storage/async-storage
```

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('token', 'abc123');
const token = await AsyncStorage.getItem('token');
await AsyncStorage.removeItem('token');
```

### Permissions
```jsx
import { PermissionsAndroid, Platform } from 'react-native';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};
```

---

## 🔐 9. Authentication

### Flow
```
1. User login kare → API call → Token mile
2. Token SecureStore mein save karo
3. App start pe token check karo → Auto login
4. Logout pe token delete karo
```

### Secure Storage
```bash
npm install expo-secure-store
```

```jsx
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('userToken', token);
const token = await SecureStore.getItemAsync('userToken');
```

### Auth Flow with Navigation
```jsx
const App = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
```

---

## 🚀 10. Performance Optimization

| Problem | Solution |
|---------|----------|
| Long list slow hai | `FlatList` use karo `ScrollView` ki jagah |
| Re-renders bahut ho rahe hain | `React.memo`, `useCallback`, `useMemo` |
| Images load slow hain | `react-native-fast-image` use karo |
| Bundle size bada hai | Code splitting, lazy loading |

### React.memo
```jsx
const UserCard = React.memo(({ name, age }) => {
  return <Text>{name} - {age}</Text>;
});
```

### FlatList Optimization
```jsx
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <UserCard name={item.name} />}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>
```

---

## 🧪 11. Debugging & Testing

### Debugging Tools
- **React Native Debugger** — Chrome DevTools jaisa
- **Flipper** — Official debugging tool
- **console.log** — Basic debugging
- **React DevTools** — Component tree dekho

### Jest Testing
```bash
npm install --save-dev jest @testing-library/react-native
```

```jsx
import { render, screen } from '@testing-library/react-native';
import UserCard from '../UserCard';

test('user ka naam dikhna chahiye', () => {
  render(<UserCard name="Rahul" age={25} />);
  expect(screen.getByText('Rahul - 25')).toBeTruthy();
});
```

### Common Errors & Fix
| Error | Fix |
|-------|-----|
| `undefined is not an object` | Optional chaining use karo `user?.name` |
| `VirtualizedLists` warning | FlatList ke andar ScrollView mat lagao |
| Metro bundler error | `npx react-native start --reset-cache` |
| Android build fail | `cd android && ./gradlew clean` |

---

## 🎬 12. Animations

### Animated API (Built-in)
```jsx
import { Animated } from 'react-native';

const fadeAnim = useRef(new Animated.Value(0)).current;

const fadeIn = () => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
};

<Animated.View style={{ opacity: fadeAnim }}>
  <Text>Fade In Text</Text>
</Animated.View>
```

### React Native Reanimated (Advanced)
```bash
npm install react-native-reanimated
```

---

## 📦 13. Important Libraries

```
Navigation:
  @react-navigation/native            → Navigation system

HTTP:
  axios                               → API calls

State Management:
  @reduxjs/toolkit + react-redux      → Large apps
  zustand                             → Simple & powerful

UI Components:
  react-native-paper                  → Material Design
  react-native-elements               → UI toolkit

Icons:
  react-native-vector-icons           → 3000+ icons
  @expo/vector-icons                  → Expo ke liye

Images:
  react-native-fast-image             → Fast & cached

Animations:
  react-native-reanimated             → Smooth animations
  react-native-lottie                 → After Effects animations

Maps:
  react-native-maps                   → Google/Apple Maps

Forms:
  react-hook-form                     → Form management
  yup                                 → Validation

Storage:
  @react-native-async-storage/async-storage
  expo-secure-store                   → Encrypted storage

Notifications:
  @react-native-firebase/messaging    → Push notifications

Date/Time:
  dayjs                               → Lightweight date lib
```

---

## 📂 14. Project Structure (Best Practice)

```
my-app/
├── src/
│   ├── screens/           → Screens (HomeScreen, ProfileScreen)
│   ├── components/        → Reusable UI components
│   │   ├── common/        → Button, Input, Card etc.
│   │   └── specific/      → Feature-specific components
│   ├── navigation/        → All navigators
│   ├── hooks/             → Custom hooks
│   ├── services/          → API calls
│   ├── store/             → Redux/Zustand store
│   ├── context/           → Context providers
│   ├── utils/             → Helper functions
│   ├── constants/         → Colors, strings, config
│   └── assets/            → Images, fonts, icons
├── App.js
├── package.json
└── .env
```

---

## ⚙️ 15. Build & Deployment

### Android
```bash
# Debug APK
npx react-native run-android

# Release AAB (Google Play ke liye)
cd android && ./gradlew bundleRelease
```

### iOS
```bash
npx react-native run-ios
# Device pe: Xcode → Archive → Distribute
```

### Environment Variables
```bash
npm install react-native-config
```
```
# .env
API_URL=https://api.example.com
API_KEY=your_secret_key
```

---

## 🔥 16. Expo vs Bare React Native

| Feature | Expo | Bare RN |
|---------|------|---------|
| Setup | Easy (5 min) | Complex |
| Native modules | Limited | Full access |
| Build | EAS Build (cloud) | Local + CI/CD |
| OTA Updates | ✅ Yes | ❌ No |
| Recommended for | Beginners, most apps | Complex native needs |

```bash
# Expo
npx create-expo-app MyApp

# Bare RN
npx react-native@latest init MyApp
```

---

## 💡 Pro Tips

1. **TypeScript use karo** — Bugs pehle hi pakad lo
2. **Custom Hooks banao** — Logic reuse karo
3. **AbortController** — Unmount pe API cancel karo
4. **Error Boundaries** — Crash gracefully handle karo
5. **Accessibility** — `accessible`, `accessibilityLabel` props use karo
6. **Offline Support** — `NetInfo` se network check karo
7. **Localization** — `i18n-js` ya `react-native-localize`

---

## 📚 Learning Resources

| Resource | Link |
|----------|------|
| Official Docs | https://reactnative.dev |
| React Navigation | https://reactnavigation.org |
| Expo Docs | https://docs.expo.dev |
| Redux Toolkit | https://redux-toolkit.js.org |

---

## ✅ Self-Assessment Checklist

### Beginner Level
- [ ] JSX likhna aata hai
- [ ] Props aur State samajh aata hai
- [ ] useState aur useEffect use kar leta/ti hoon
- [ ] Basic components use kar leta/ti hoon
- [ ] Flexbox se layout bana leta/ti hoon
- [ ] FlatList use kar leta/ti hoon
- [ ] Navigation setup kar leta/ti hoon

### Intermediate Level
- [ ] Custom Hooks bana leta/ti hoon
- [ ] Axios se API call kar leta/ti hoon
- [ ] Context API use kar leta/ti hoon
- [ ] AsyncStorage use kar leta/ti hoon
- [ ] Forms handle kar leta/ti hoon
- [ ] Error handling properly karta/ti hoon

### Advanced Level
- [ ] Redux Toolkit use kar leta/ti hoon
- [ ] Performance optimize kar leta/ti hoon
- [ ] Animations bana sakta/ti hoon
- [ ] Push Notifications setup kar sakta/ti hoon
- [ ] App store pe publish kar sakta/ti hoon
- [ ] TypeScript ke saath RN use karta/ti hoon
- [ ] Unit tests likhta/ti hoon

---

*Happy Coding! 🚀 — React Native seekhna mushkil lagta hai shuruaat mein, par practice se sab ho jata hai!*

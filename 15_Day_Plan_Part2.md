# DAY 6 — FlatList + SectionList

## Previous Day Review
- Layout App dekhao, flexbox explain karo
- justifyContent vs alignItems fark batao
- 2 random Day 5 questions

## Aaj Kya Seekhenge?
- FlatList — Badi lists efficiently render karna
- SectionList — Groups wali list
- Pull-to-refresh
- Infinite scroll
- Empty state handle karna

## THEORY — FlatList Important Props
```jsx
<FlatList
  data={users}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <UserRow user={item} />}
  ListHeaderComponent={<Header />}
  ListFooterComponent={<Footer />}
  ListEmptyComponent={<EmptyState />}
  ItemSeparatorComponent={() => <Divider />}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  refreshing={isRefreshing}
  onRefresh={handleRefresh}
  onEndReached={loadMore}
  onEndReachedThreshold={0.5}
/>
```

## PRACTICE APP — Contact Book App
- FlatList se 20+ fake contacts
- SectionList se alphabetically grouped contacts
- Search Bar se filter karo
- Pull to Refresh
- Empty State

## DAY 6 — 10 Interview Questions
```
Q1.  FlatList mein keyExtractor kyun zaroori hai?
Q2.  ScrollView vs FlatList performance mein kya fark hai?
Q3.  onEndReached kab trigger hota hai?
Q4.  onEndReachedThreshold={0.5} ka matlab kya hai?
Q5.  ListEmptyComponent kab show hota hai?
Q6.  SectionList mein data ka format kya hona chahiye?
Q7.  FlatList horizontal kaise banate hain?
Q8.  getItemLayout prop kab use karte hain?
Q9.  Pull-to-refresh ke liye kaunse props chahiye?
Q10. FlatList mein numColumns prop kya karta hai?
```

---

# DAY 7 — React Navigation (Stack + Bottom Tabs)

## Previous Day Review
- Contact Book App explain karo
- FlatList ke 5 important props batao
- 2 random Day 6 questions

## Aaj Kya Seekhenge?
- React Navigation setup
- Stack Navigator
- Bottom Tab Navigator
- navigation object ke methods
- Header customize karna

## THEORY

### Install
```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

### Stack Navigator
```jsx
const Stack = createStackNavigator();
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen}
      options={{ title: 'Details', headerStyle: { backgroundColor: '#6200ea' } }} />
  </Stack.Navigator>
</NavigationContainer>
```

### Navigation Methods
```jsx
navigation.navigate('Details');
navigation.goBack();
navigation.replace('Home');
navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
```

## PRACTICE APP — 3-Screen Navigation App
- Home Tab + Explore Tab + Profile Tab
- Stack: Home se Details screen
- Header customize karo
- Tab icons lagao

## DAY 7 — 10 Interview Questions
```
Q1.  NavigationContainer kyun zaroori hai?
Q2.  Stack aur Tab Navigator mein kya fark hai?
Q3.  navigate() aur push() mein kya fark hai?
Q4.  initialRouteName kya karta hai?
Q5.  Screen ka title kaise change karte hain?
Q6.  navigation object component mein kaise aata hai?
Q7.  Back button automatically kab dikhta hai?
Q8.  goBack() aur pop() mein fark?
Q9.  Tab mein active tab ka color kaise change karte hain?
Q10. Nested navigators kya hote hain?
```

---

# DAY 8 — Navigation Advanced (Drawer + Params)

## Previous Day Review
- 3-Screen App dekhao
- Stack vs Tab explain karo
- 2 random Day 7 questions

## Aaj Kya Seekhenge?
- Drawer Navigator (side menu)
- Params pass karna screens ke beech
- Nested navigators
- Screen options dynamically set karna

## THEORY

### Params Pass Karna
```jsx
// Bhejte hain
navigation.navigate('ProductDetail', {
  productId: 42,
  productName: 'iPhone 15',
  price: 79999,
});

// Receive karte hain
const ProductDetailScreen = ({ route }) => {
  const { productId, productName, price } = route.params;
  return <Text>{productName} - {price}</Text>;
};

// Title mein params
<Stack.Screen name="ProductDetail"
  options={({ route }) => ({ title: route.params.productName })} />
```

### Drawer Navigator
```bash
npm install @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated
```

## PRACTICE APP — Product Menu App
- Drawer: Home, Products, About, Settings
- Products FlatList
- Product Detail screen (params: id, name, price)
- Dynamic header with product name

## DAY 8 — 10 Interview Questions
```
Q1.  Params kaise pass karte hain screens ke beech?
Q2.  route.params undefined aaye to kya karein?
Q3.  Drawer Navigator open karne ka gesture kya hai?
Q4.  Programmatically drawer open kaise karte hain?
Q5.  Nested navigator kya hota hai?
Q6.  Screen options mein route kaise access karte hain?
Q7.  navigation.setOptions() kab use karte hain?
Q8.  Stack mein header hide kaise karte hain?
Q9.  Tab mein badge (notification count) kaise lagate hain?
Q10. useFocusEffect kya hota hai?
```

---

# DAY 9 — API Integration (Axios + Error Handling)

## Previous Day Review
- Product App dekhao
- Params passing explain karo
- 2 random Day 8 questions

## Aaj Kya Seekhenge?
- Axios setup aur use karna
- GET, POST, PUT, DELETE requests
- Loading, Error, Success states
- Axios interceptors
- Error messages properly dikhana

## THEORY

### Axios Instance
```jsx
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) { /* logout */ }
    return Promise.reject(error);
  }
);

export default api;
```

### CRUD
```jsx
const getPosts = async () => (await api.get('/posts')).data;
const createPost = async (data) => (await api.post('/posts', data)).data;
const updatePost = async (id, data) => (await api.put(`/posts/${id}`, data)).data;
const deletePost = async (id) => await api.delete(`/posts/${id}`);
```

## PRACTICE APP — Posts Manager App
- Posts List: GET /posts
- Post Detail + Comments
- Create Post: Form + POST
- Delete Post
- Loading Spinner + Error handling

## DAY 9 — 10 Interview Questions
```
Q1.  Axios aur fetch() mein 3 main differences kya hain?
Q2.  Axios instance kyun banate hain?
Q3.  Interceptors kya hote hain?
Q4.  API error kaise handle karte hain?
Q5.  error.response aur error.message mein kya fark hai?
Q6.  Loading state kyun zaroori hai?
Q7.  API call component mein ya alag file mein?
Q8.  CORS error kya hota hai?
Q9.  async/await aur .then().catch() mein fark?
Q10. Timeout set karna kyun important hai?
```

---

# DAY 10 — Custom Hooks + useRef + useMemo + useCallback

## Previous Day Review
- Posts App explain karo
- Axios instance bina dekhe likho
- 2 random Day 9 questions

## Aaj Kya Seekhenge?
- Custom Hooks banana
- useRef — DOM reference + value persist
- useMemo — Heavy calculations cache
- useCallback — Functions cache
- Re-render optimization

## THEORY

### Custom Hook
```jsx
// hooks/useFetch.js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios.get(url, { signal: controller.signal })
      .then(res => setData(res.data))
      .catch(err => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
```

### useRef
```jsx
const inputRef = useRef(null);
<TextInput ref={inputRef} />
<Button onPress={() => inputRef.current.focus()} title="Focus" />
```

## PRACTICE APP — Smart Search App
- Custom Hook useFetch banao
- Search: useMemo se filter
- Auto-focus: useRef
- useCallback se search function memoize karo

## DAY 10 — 10 Interview Questions
```
Q1.  Custom Hook kya hota hai? Kab banate hain?
Q2.  Custom Hook ka naam use se kyun start karna chahiye?
Q3.  useRef aur useState mein kya fark hai?
Q4.  useRef value change karne pe re-render kyun nahi hota?
Q5.  useMemo kab use karte hain?
Q6.  useCallback kab use karte hain?
Q7.  useMemo aur useCallback mein kya fark hai?
Q8.  React.memo kya karta hai?
Q9.  AbortController kya hota hai?
Q10. Over-optimization kya hai?
```

---

# DAY 11 — Context API + Global State

## Previous Day Review
- Search App dekhao
- Custom Hook explain karo
- 2 random Day 10 questions

## Aaj Kya Seekhenge?
- Context API — Global state
- Multiple contexts
- Context ke saath custom hook
- Zustand

## THEORY

### Context API
```jsx
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be inside CartProvider');
  return context;
};
```

## PRACTICE APP — Shopping Cart App
- Products Screen: Add to Cart button
- Cart Screen: Items + total + remove
- Cart Badge: Tab pe item count
- Theme Toggle: Dark/Light mode

## DAY 11 — 10 Interview Questions
```
Q1.  Context API kab use karte hain?
Q2.  Prop drilling kya hai?
Q3.  useContext hook kaise kaam karta hai?
Q4.  Context Provider ke bahar useContext use karein to kya hoga?
Q5.  Context ke re-render problem kya hai?
Q6.  Multiple contexts kaise use karte hain?
Q7.  Context aur Redux mein kya fark hai?
Q8.  Zustand Context se better kyun hai?
Q9.  Context value mein function pass kar sakte hain kya?
Q10. Context value change hone pe kaun re-render hota hai?
```

---

# DAY 12 — AsyncStorage + SecureStore + Forms

## Previous Day Review
- Cart App dekhao
- Context API flow explain karo
- 2 random Day 11 questions

## Aaj Kya Seekhenge?
- AsyncStorage — Local data save karna
- SecureStore — Encrypted storage
- react-hook-form
- Yup validation

## THEORY

### Storage
```jsx
// AsyncStorage
await AsyncStorage.setItem('notes', JSON.stringify(notesArray));
const stored = await AsyncStorage.getItem('notes');
const notes = stored ? JSON.parse(stored) : [];
await AsyncStorage.removeItem('notes');

// SecureStore (encrypted)
await SecureStore.setItemAsync('authToken', token);
const token = await SecureStore.getItemAsync('authToken');
await SecureStore.deleteItemAsync('authToken');
```

### React Hook Form
```jsx
const { control, handleSubmit, formState: { errors } } = useForm();

<Controller
  control={control}
  name="email"
  rules={{ required: 'Email zaroori hai' }}
  render={({ field: { onChange, value } }) => (
    <TextInput value={value} onChangeText={onChange} />
  )}
/>
{errors.email && <Text>{errors.email.message}</Text>}
```

## PRACTICE APP — Notes Saver App
- Add Note: Title + body
- Notes List: AsyncStorage se load
- Delete Note
- Persist: App band/kholo — notes wahi
- Validation: Empty note save na ho

## DAY 12 — 10 Interview Questions
```
Q1.  AsyncStorage aur SecureStore mein kya fark hai?
Q2.  AsyncStorage mein object kaise save karte hain?
Q3.  AsyncStorage synchronous ya asynchronous?
Q4.  App uninstall karne pe AsyncStorage kya hota hai?
Q5.  react-hook-form kyun use karte hain?
Q6.  Controller component kya karta hai?
Q7.  handleSubmit kab validation run karta hai?
Q8.  MMKV kya hai? AsyncStorage se better kyun?
Q9.  Sensitive data AsyncStorage mein safe hai kya?
Q10. Form reset kaise karte hain?
```

---

# DAY 13 — Authentication Flow

## Previous Day Review
- Notes App dekhao
- AsyncStorage ka code bina dekhe likho
- 2 random Day 12 questions

## Aaj Kya Seekhenge?
- Complete Auth flow
- Token store karna
- Auto-login
- Protected routes

## THEORY — Auth Flow
```
App Start
    |
Token Check (SecureStore)
    |
Token hai? YES -> AppNavigator
    |
   NO
    |
AuthNavigator (Login/Register)
    |
Login Success -> Token Save -> AppNavigator
    |
Logout -> Token Delete -> AuthNavigator
```

```jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        if (token) setUser({ token }); // ya API se user fetch karo
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, []);

  const login = async (email, password) => {
    // API call karo, token save karo
    await SecureStore.setItemAsync('authToken', 'fake-token');
    setUser({ email });
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## PRACTICE APP — Auth Flow App
- Loading Screen: Token check
- Login Screen: Email + Password + validation
- Register Screen
- Home Screen: User info + Logout
- Auto-login: Token stored ho to directly Home

## DAY 13 — 10 Interview Questions
```
Q1.  JWT token kya hota hai?
Q2.  Token AsyncStorage mein safe hai kya?
Q3.  Auto-login kaise implement karte hain?
Q4.  Token expire hone pe kya karna chahiye?
Q5.  Refresh token kya hota hai?
Q6.  Protected routes kaise banate hain RN mein?
Q7.  Logout ke time sirf state clear kaafi hai kya?
Q8.  OAuth kya hota hai?
Q9.  isLoading state auth mein kyun rakhte hain?
Q10. Biometric authentication RN mein kaise karte hain?
```

---

# DAY 14 — Animations

## Previous Day Review
- Auth App explain karo (poora flow)
- Token check ka code bina dekhe likho
- 2 random Day 13 questions

## Aaj Kya Seekhenge?
- Animated API — Basic animations
- useNativeDriver importance
- Spring, Sequence, Loop
- Gestures

## THEORY

### Animated API
```jsx
const opacity = useRef(new Animated.Value(0)).current;
const translateY = useRef(new Animated.Value(50)).current;

useEffect(() => {
  Animated.parallel([
    Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    Animated.timing(translateY, { toValue: 0, duration: 500, useNativeDriver: true }),
  ]).start();
}, []);

<Animated.View style={{ opacity, transform: [{ translateY }] }}>
  <Text>Fade + Slide In!</Text>
</Animated.View>
```

### Animation Types
```jsx
// Timing — Simple
Animated.timing(value, { toValue: 1, duration: 300, useNativeDriver: true })

// Spring — Bouncy feel
Animated.spring(value, { toValue: 1, tension: 50, friction: 7, useNativeDriver: true })

// Sequence — Ek ke baad ek
Animated.sequence([anim1, anim2, anim3]).start()

// Loop — Repeat
Animated.loop(Animated.timing(value, { toValue: 1, duration: 1000, useNativeDriver: true })).start()
```

## PRACTICE APP — Animated Cards App
- Fade In: Cards fade + slide in
- Heart Like: Scale animation on press
- Shake Error: Input shake on wrong password
- Progress Bar: Animated progress
- Loading Spinner: Custom rotating

## DAY 14 — 10 Interview Questions
```
Q1.  useNativeDriver: true kyun lagana chahiye?
Q2.  Animated.timing aur Animated.spring mein kya fark hai?
Q3.  Kaunse properties useNativeDriver: true se kaam karti hain?
Q4.  Animated.parallel aur Animated.sequence mein kya fark hai?
Q5.  Animated.Value ko useRef mein kyun rakhte hain?
Q6.  react-native-reanimated Animated API se better kyun hai?
Q7.  LayoutAnimation kab use karte hain?
Q8.  Gesture Handler kya hota hai?
Q9.  Animation cancel kaise karte hain?
Q10. Lottie animation kya hota hai?
```

---

# DAY 15 — Performance + Build + Full Revision

## Previous Day Review
- Animated App dekhao
- Ek animation bina dekhe dobara likho
- 2 random Day 14 questions

## Aaj Kya Seekhenge?
- Performance best practices
- Android APK build karna
- 15 din ka full revision

## Performance Checklist
```
FlatList use karo ScrollView ki jagah
React.memo use karo pure components pe
useCallback FlatList renderItem mein
useMemo expensive computations mein
useNativeDriver: true animations mein
react-native-fast-image use karo
console.log production mein hata do
Hermes engine enable karo
```

## Android Build
```bash
# Expo ke saath
npx eas build -p android --profile production
```

## 15-Day Summary

### Week 1 — Foundation
- Day 1: JSX + Components + Props -> Profile Card App
- Day 2: State + Events -> Counter + Toggle App
- Day 3: useEffect + Lifecycle -> Timer + API Loader App
- Day 4: Core Components -> Component Showcase App
- Day 5: Styling + Flexbox -> Layout Designer App

### Week 2 — Core Features
- Day 6: FlatList + SectionList -> Contact Book App
- Day 7: Navigation Stack + Tabs -> 3-Screen Nav App
- Day 8: Navigation Drawer + Params -> Product Menu App
- Day 9: API Integration -> Posts Manager App
- Day 10: Custom Hooks + useRef -> Smart Search App

### Week 3 — Advanced
- Day 11: Context API -> Shopping Cart App
- Day 12: Storage + Forms -> Notes Saver App
- Day 13: Authentication -> Auth Flow App
- Day 14: Animations -> Animated Cards App
- Day 15: Performance + Build -> Final Review

## DAY 15 — Grand Final 10 Questions
```
Q1.  Apna sabse favorite app kaunsa tha aur kyun?
Q2.  Props, State, Context — teen sentences mein explain karo.
Q3.  useEffect ke teen forms kaunse hain?
Q4.  FlatList mein performance ke liye 3 important props?
Q5.  Authentication flow start to end explain karo.
Q6.  Custom Hook kab banate hain? Example do.
Q7.  Context aur Redux mein kab kaunsa choose karoge?
Q8.  useNativeDriver: true animations mein kyun?
Q9.  Ek real app ka tech stack choose karo aur justify karo.
Q10. React Native ka future kya hai?
```

---

## Next Steps — 15 Din ke Baad
```
1. TypeScript — RN ko TypeScript mein migrate karo
2. Redux Toolkit — Complex state management
3. React Query — Server state management
4. Push Notifications — Firebase FCM
5. Maps — react-native-maps
6. Camera & Media — expo-camera
7. Real App banao — Portfolio ke liye
8. Play Store pe publish karo
```

---

*Happy Coding! — React Native seekhna mushkil lagta hai shuruaat mein, par practice se sab ho jata hai!*
*Start Date: ___________*
*End Date: ___________*

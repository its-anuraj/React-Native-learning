# 📅 Day 1 — JSX, Components & Props
> **Practice App:** Profile Card App | **Date:** 2026-08-06

---

## 🎯 What We Built
A **Profile Card App** showing 4 beautiful cards with:
- Name, Profession, Location, Bio, Skills
- Emoji avatar with circle border
- Purple accent top bar
- Skills chip
- Shadow + rounded corners

---

## 📚 Concepts Learned Today

### 1. JSX
HTML-jaisa syntax jo JavaScript mein hota hai.
```jsx
// Normal JS — ugly
React.createElement(Text, null, "Hello")

// JSX — clean ✅
<Text>Hello</Text>
```

### 2. Functional Component
```jsx
const ProfileCard = () => {
  return <View><Text>Hello!</Text></View>;
};
export default ProfileCard;
```
> **Rule:** Name always PascalCase — `ProfileCard` not `profileCard`

### 3. Props — Parent to Child Data
```jsx
// Parent sends data
<ProfileCard name="Arnav" profession="Engineer" emoji="🧑‍💻" />

// Child receives via destructuring
const ProfileCard = ({ name, profession, emoji }) => {
  return <Text>{emoji} {name} — {profession}</Text>;
};
```
> **Rule:** Props are READ-ONLY — child kabhi props change nahi kar sakta!

### 4. Default Props
```jsx
// Agar emoji pass na karo toh "👤" use hoga
const ProfileCard = ({ name, emoji = "👤" }) => { ... };
```

### 5. StyleSheet.create()
```jsx
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    elevation: 8,           // Android shadow
    shadowColor: "#6C63FF", // iOS shadow
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
  }
});
```

### 6. View vs ScrollView
| | View | ScrollView |
|---|---|---|
| Scroll | ❌ No scroll | ✅ Scrollable |
| Use case | Fixed container | Long content / lists |

### 7. Key Prop (List Rendering)
```jsx
{profiles.map((p) => (
  <ProfileCard key={p.id} name={p.name} />  // key zaroor!
))}
```

### 8. contentContainerStyle (ScrollView)
```jsx
<ScrollView
  contentContainerStyle={{
    flexGrow: 1,              // Full screen height
    justifyContent: "center", // Vertical center
    alignItems: "center",     // Horizontal center
    gap: 16,                  // Between cards
    paddingVertical: 20,      // Top & bottom breathing room
  }}
/>
```
> **gap** = cards ke beech | **paddingVertical** = container ke edges pe

---

## 📁 File Structure
```
ProfileCardApp/
├── App.js                 ← Entry point, ScrollView with 4 cards
├── components/
│   └── ProfileCard.js     ← Reusable component (props leta hai)
└── package.json
```

---

## ▶️ How to Run
```bash
npm install
npx expo start
# Expo Go app se QR scan karo
```

---

## 🔑 Commands Used
| Command | Purpose |
|---------|---------|
| `npx create-expo-app@3 AppName --template blank` | New Expo 54 app |
| `npx expo start` | Start dev server |

---

## ❓ Day 1 Interview Questions
```
Q1.  JSX kya hai aur React Native mein kyun use karte hain?
Q2.  Component aur Element mein kya fark hai?
Q3.  Props kya hote hain? Kya props mein function bhi pass kar sakte hain?
Q4.  Props ko child se parent mein change kar sakte hain kya? Kyun?
Q5.  Functional Component aur Class Component mein kya fark hai?
Q6.  Destructuring kya hai? Props mein kaise use karte hain?
Q7.  Default props kaise set karte hain?
Q8.  Kya ek component ke andar doosra component ho sakta hai?
Q9.  key prop kya hota hai aur kab zaroori hota hai?
Q10. JSX mein JavaScript expression kaise likhte hain?
```

---
*Day 1 ✅ Complete! Next → Day 2: State, useState, Event Handling 🚀*

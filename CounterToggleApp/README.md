# CounterToggleApp — Day 2

## 📚 Topics Covered
- `useState` Hook
- Event Handling (`onPress`, `onChangeText`)
- State update & re-render
- Conditional rendering (ternary operator)

## ✅ Features
| Feature | Description |
|---------|-------------|
| Counter | + / - / Reset buttons se count change hota hai |
| Toggle | Button se text show/hide hota hai |
| Color Changer | Button press par random background color |
| Mini Form | Naam type karo → "Namaste, naam! 👋" show hota hai |

## 🧠 Key Concepts Learned

### useState Hook
```jsx
const [count, setCount] = useState(0);
```

### Event Handling
```jsx
<TouchableOpacity onPress={() => setCount(count + 1)}>
```

### Conditional Rendering
```jsx
{greeting ? <Text>{greeting}</Text> : null}
```

### Template Literal
```jsx
setGreeting(`Namaste, ${name}! 👋`)
```

## 🗂️ File Structure
```
CounterToggleApp/
├── App.js
└── README.md
```

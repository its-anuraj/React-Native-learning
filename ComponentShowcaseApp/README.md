# 📱 ComponentShowcaseApp — Day 4

Interactive showcase application demonstrating React Native's Core Components, touch handling, and mobile form mechanics.

---

## 📚 Day 4 Topics Covered
- **`TextInput`** — Controlled state binding, email keyboard types, secure password masking, multiline textareas.
- **`Image`** — Remote network images (`{ uri: '...' }`), `resizeMode` variations (`cover`, `contain`), and border radiuses.
- **`Modal`** — Popups with animated transitions (`slide`), semi-transparent backdrop overlays (`rgba(0,0,0,0.55)`), and Android hardware back button handler (`onRequestClose`).
- **`Alert`** — Native OS dialogs with multi-button arrays and `style: 'destructive'` styling.
- **`ActivityIndicator`** — Asynchronous simulated loading spinner inside buttons.
- **`KeyboardAvoidingView` & `ScrollView`** — Keyboard offset handling, safe insets, and smooth scrolling without gesture collisions.
- **`Pressable`** — Modern touchable wrapper with state feedback.

---

## 🛠️ Features Built
| Feature | Implementation Details |
|---|---|
| **User Profile Form** | Name, Email (`keyboardType="email-address"`), Password (`secureTextEntry` + Show/Hide toggle), and Bio textarea (`multiline`, `maxLength={120}`). |
| **Simulated API Loader** | 2-second loading delay disabling button and spinning `ActivityIndicator`. |
| **Confirmation Alerts** | Success alert and destructive Reset form confirmation dialog. |
| **Profile Card Modal** | Slide-up modal displaying entered user details. |

---

## 🚀 How to Run

```bash
cd ComponentShowcaseApp
npm install
npx expo start
```

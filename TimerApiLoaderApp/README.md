# Day 3 — Timer + API Loader App

React Native practice app built for Day 3 of the 15-Day React Native Master Class.

## Key Concepts Demonstrated:
1. **Live Clock (`components/LiveClock.js`)**: `useEffect` with `[]` dependency array and interval cleanup on unmount.
2. **Stopwatch (`components/Stopwatch.js`)**: `useEffect` with state dependency array `[isRunning]` and cleanup function.
3. **API Loader (`components/ApiPostLoader.js`)**: Async data fetching (`fetch`), loading spinner state (`ActivityIndicator`), error handling, and manual reload.

## How to Run:
```bash
cd TimerApiLoaderApp
npm install  # (if needed)
npx expo start
```

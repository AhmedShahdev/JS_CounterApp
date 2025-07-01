# 🔢 Counter App – JavaScript

A beginner-friendly **counter application** built using **HTML, CSS, and JavaScript**.  
This app allows users to increment, decrement, and reset a counter value in real time.

---

## 🚀 Features

- Simple and responsive counter interface  
- Real-time display update  
- Clean JavaScript logic with DOM manipulation  
- 3 main actions: **Increment**, **Decrement**, **Reset**

---

## 🧠 How It Works

1. `count` variable tracks the current number.
2. Buttons for **+**, **−**, and **reset** are selected via `querySelector()`.
3. A function `updateDisplay()` is used to refresh the displayed count whenever it changes.

---

### ✅ Increment Logic

```js
incBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

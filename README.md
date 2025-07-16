# 🔢 Counter App – JavaScript

A beginner-friendly **counter application**.  
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
### 🌍 Tech Stack

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML5 logo" title="HTML5" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="CSS3 logo" title="CSS3" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript logo" title="JavaScript" />
</div>

---
### ✅ Increment Logic

```js
incBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

---- 


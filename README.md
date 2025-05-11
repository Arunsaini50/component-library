# 📦 Component Library SDK — Internship Task 2

This is my submission for **Task 2** of the Frontend Developer Internship.

A reusable UI component library built from scratch using **ReactJS** and **TailwindCSS** — without any external UI libraries.

---

## 🔧 Components Included

| Component | Description |
|----------|-------------|
| `Button` | Reusable button with `variant` prop (primary, secondary, danger) |
| `Input` | Labeled input with full state control |
| `Card` | Layout box with title & shadow |
| `Avatar` | User profile image + name |
| `Badge` | Status pill (color-based) |

---

## 🧪 Demo Pages

### 1. `ProfilePage.jsx`

Uses: `Card`, `Avatar`, `Input`, `Button`

> A user profile form with editable fields and profile preview.

### 2. `ProductPage.jsx`

Uses: `Card`, `Badge`, `Button`

> A product listing UI that shows product info with status badges and action buttons.

---

## 🧠 How to Use the Components

### Button

```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```
---

## Input
```jsx
<Input
  label="Email"
  name="email"
  value={email}
  onChange={handleChange}
/>

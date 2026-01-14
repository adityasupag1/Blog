
# 📝 React Blog Application (Dummy Data + LocalStorage)

A modern **React Blog Application** that demonstrates **CRUD operations**, **state management**, and **client-side persistence** using **dummy data merged with browser localStorage**.  
This project is ideal for **learning React fundamentals** and showcasing a **portfolio-level project**.

---

## 🚀 Features

- 🏠 Home page with clean UI
- 📄 Blog listing with cards
- ➕ Create new blogs
- ✏️ Edit existing blogs (dummy blogs included via override)
- ❌ Delete blogs
- 🔍 Search blogs by title
- 🏷️ Filter blogs by category
- 📑 Pagination
- 💾 Persistent storage using `localStorage`
- 🔁 Dummy data + user-created data merged safely
- 🧭 Routing using React Router

---

## 🧠 Data Management Logic

### Dummy Blogs
- Stored in `src/data/blogs.js`
- Used as **initial seed data**
- Cannot be permanently edited directly

### User Blogs
- Stored in browser **localStorage**
- New blogs are added to localStorage
- Edited dummy blogs are **overridden** in localStorage

### Merge Priority
```
localStorage blogs (highest priority)
↓
dummy blogs (fallback)
```

---

## 🗂️ Blog Data Structure

```js
{
  id: Number,
  title: String,
  author: String,
  category: String,
  image: String,
  description: String,
  content: String,
  date: String
}
```

---

## 🛠️ Tech Stack

- React
- React Router DOM
- JavaScript (ES6+)
- HTML & CSS
- Browser localStorage

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── BlogCard.jsx
│   ├── Navbar.jsx
│
├── data/
│   └── blogs.js
│
├── pages/
│   ├── Home.jsx
│   ├── Blogs.jsx
│   ├── BlogDetails.jsx
│   ├── CreateBlog.jsx
│   ├── EditBlog.jsx
│   ├── About.jsx
│
├── utils/
│   └── storage.js
│
├── App.jsx
├── index.js
└── index.css
```

---

## 🔐 Important Notes

- `localStorage` data is per browser and per device
- Blogs created by one user are not visible to others
- Clearing browser data resets user-created blogs
- This is a client-side only project

---

## ❌ Limitations

- No backend or database
- No authentication
- Blogs are not globally shared
- Not SEO-friendly

---

## 🌱 Future Improvements

- Backend with Node.js & Express
- Database (MongoDB / SQL)
- Authentication
- Admin panel
- Comments & likes
- SEO optimization

---

## 🧪 How to Run Locally

```bash
npm install
npm start
```

Then open:

```
http://localhost:3000
```

---

## 📌 Learning Outcomes

- React component architecture
- useState & useEffect
- CRUD operations
- localStorage persistence
- Data merging strategies

---

## 📄 License

This project is for educational purposes and free to use.

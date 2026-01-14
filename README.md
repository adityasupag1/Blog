📝 React Blog Application (Dummy Data + LocalStorage)

A modern React Blog Application that demonstrates CRUD operations, state management, and client-side persistence using dummy data merged with browser localStorage.
This project is ideal for learning React fundamentals and showcasing a portfolio-level project.

🚀 Features

🏠 Home page with clean UI

📄 Blog listing with cards

➕ Create new blogs

✏️ Edit existing blogs (dummy blogs included via override)

❌ Delete blogs

🔍 Search blogs by title

🏷️ Filter blogs by category

📑 Pagination

💾 Persistent storage using localStorage

🔁 Dummy data + user-created data merged safely

🧭 Routing using React Router

🧠 Data Management Logic (Important)
Dummy Blogs

Stored in src/data/blogs.js

Used as initial seed data

Cannot be permanently edited directly

User Blogs

Stored in browser localStorage

New blogs are added to localStorage

Edited dummy blogs are overridden in localStorage

Merge Priority
localStorage blogs (highest priority)
↓
dummy blogs (fallback)


This ensures:

No duplicate blogs

Edited blogs persist on refresh

New blogs appear at the top

🗂️ Blog Data Structure

All blogs follow a single unified schema:

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


⚠️ Dummy data is normalized to use description (not desc)
to avoid UI mismatches.

🛠️ Tech Stack

React

React Router DOM

JavaScript (ES6+)

HTML & CSS

Browser localStorage

📁 Project Structure
src/
│
├── components/
│   ├── BlogCard.jsx       # Individual blog card UI
│   ├── Navbar.jsx         # Navigation bar
│
├── data/
│   └── blogs.js           # Dummy blog data
│
├── pages/
│   ├── Home.jsx           # Home page
│   ├── Blogs.jsx          # Blog listing page
│   ├── BlogDetails.jsx    # Single blog view
│   ├── CreateBlog.jsx     # Create new blog
│   ├── EditBlog.jsx       # Edit / Delete blog
│   ├── About.jsx          # About page
│   └── Home.css
│
├── utils/
│   └── storage.js         # localStorage helper functions
│
├── App.jsx
├── App.css
├── index.js
├── index.css
│
└── setupTests.js

🧩 Key Logic (Merge Dummy + LocalStorage Blogs)
const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

const storedIds = new Set(storedBlogs.map(b => b.id));

const uniqueDummyBlogs = dummyBlogs.filter(
  b => !storedIds.has(b.id)
);

const mergedBlogs = [...storedBlogs, ...uniqueDummyBlogs];


✔ Prevents duplicates
✔ Ensures edited blogs override dummy ones
✔ New blogs appear first

🔐 Important Notes

localStorage data is:

Per browser

Per device

Per user

Blogs created by one user are not visible to others

Clearing browser data resets user-created blogs

This project is client-side only

❌ Limitations

No backend or database

No authentication or authorization

Blogs are not shared globally

Not SEO-friendly

This project is intended for learning and portfolio use, not production.

🌱 Future Improvements

Backend with Node.js & Express

Database integration (MongoDB / SQL)

User authentication

Admin panel

Comments & likes

SEO optimization

🧪 How to Run Locally
npm install
npm start


Then open:

http://localhost:3000

📌 Learning Outcomes

By building this project, you learn:

React component architecture

useState & useEffect

CRUD operations

localStorage persistence

Data merging strategies

Real-world React patterns

📄 License

This project is for educational purposes and is free to use, modify, and extend.
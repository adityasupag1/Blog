import blogs from "../data/blogs";

export const getBlogs = () => {
  const storedBlogs = localStorage.getItem("blogs");

  if (!storedBlogs) {
    localStorage.setItem("blogs", JSON.stringify(blogs));
    return blogs;
  }

  return JSON.parse(storedBlogs);
};

export const saveBlogs = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

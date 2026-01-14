import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dummyBlogs from '../data/blogs'
const EditBlog = () => {


	const { id } = useParams();
	const navigate = useNavigate();

	const [blog, setBlog] = useState(null);

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");

	// Firstly Loading the blog from localStorage
	useEffect(() => {
		const storedBlogs =
			JSON.parse(localStorage.getItem("blogs")) || [];

		// 1-> Try localStorage first
		let foundBlog = storedBlogs.find((b) => b.id === Number(id));

		// 2-> If not found, Looking back into the DummyBlogs Data
		if (!foundBlog) {
			foundBlog = dummyBlogs.find((b) => b.id === Number(id));
		}

		if (foundBlog) {
			setBlog(foundBlog);
			setTitle(foundBlog.title);
			setAuthor(foundBlog.author || "");
			setCategory(foundBlog.category || "");
			setDescription(
				foundBlog.desc || foundBlog.description || ""
			);
			setContent(foundBlog.content || "");
		}
	}, [id]);

	// ✅ UPDATE BLOG
	const handleUpdate = (e) => {
		e.preventDefault();

		const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

		const updatedBlogs = blogs.map((b) =>
			b.id === Number(id)
				? {
						...b,
						title,
						author,
						category,
						description,
						content,
				  }
				: b
		);

		localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
		alert("Blog Updated Successfully ✨");
		navigate("/blogs");
	};

	// ❌ DELETE BLOG (with confirmation)
	const handleDelete = () => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this blog?"
		);

		if (confirmDelete) {
			const blogs =
				JSON.parse(localStorage.getItem("blogs")) || [];
			const filteredBlogs = blogs.filter(
				(b) => b.id !== Number(id)
			);

			localStorage.setItem(
				"blogs",
				JSON.stringify(filteredBlogs)
			);
			alert("Blog Deleted ❌");
			navigate("/blogs");
		}
	};

	if (!blog) {
		return <h2 style={{ color: "white" }}>Blog not found</h2>;
	}

	return (
		<div style={pageStyle}>
			<form style={formStyle} onSubmit={handleUpdate}>
				<h1>Edit Blog</h1>

				<input
					type="text"
					value={title}
					onChange={(e) =>
						setTitle(e.target.value)
					}
					placeholder="Blog Title"
					required
				/>

				<input
					type="text"
					value={author}
					onChange={(e) =>
						setAuthor(e.target.value)
					}
					placeholder="Author Name"
					required
				/>

				<input
					type="text"
					value={category}
					onChange={(e) =>
						setCategory(e.target.value)
					}
					placeholder="Category"
					required
				/>

				<textarea
					rows="3"
					value={description}
					onChange={(e) =>
						setDescription(e.target.value)
					}
					placeholder="Short Description"
					required
				/>

				<textarea
					rows="6"
					value={content}
					onChange={(e) =>
						setContent(e.target.value)
					}
					placeholder="Full Content"
					required
				/>

				<button type="submit">Update Blog</button>

				<button
					type="button"
					onClick={handleDelete}
					style={deleteBtn}
				>
					Delete Blog
				</button>
			</form>
		</div>
	);
};

/* ---------- STYLES ---------- */

const pageStyle = {
	minHeight: "100vh",
	background: "linear-gradient(var(--overlay-bg), var(--overlay-bg)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "40px",
};

const formStyle = {
	background: "var(--card-bg)",
	color: "var(--text-main)",
	padding: "30px",
	borderRadius: "15px",
	width: "100%",
	maxWidth: "500px",
	display: "flex",
	flexDirection: "column",
	gap: "12px",
};

const deleteBtn = {
	background: "#e63946",
	color: "white",
	border: "none",
	padding: "10px",
	borderRadius: "8px",
	cursor: "pointer",
};

export default EditBlog;

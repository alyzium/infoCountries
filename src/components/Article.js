import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Article = (props) => {
	const { article } = props;
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState("");

	const dateParser = (date) => {
		let newDate = new Date(date).toLocaleDateString("fr-FR", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
		return newDate;
	};

	const handleEdit = () => {
		const data = {
			author: article.author,
			content: editedContent ? editedContent : article.content,
			date: Date.now(),
		};
		axios.put("http://localhost:3003/articles/" + article.id, data).then();
		setIsEditing(false);
	};

	const handleDelete = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this Article!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				axios.delete("http://localhost:3003/articles/" + article.id).then(window.location.reload());
			} else {
				swal({
					title: "Information",
					text: "This article is safe!",
					icon: "info",
					timer: 1300,
				});
			}
		});
	};

	return (
		<div className="article" style={{ background: isEditing ? "#f3feff" : "white" }}>
			<div className="card-header">
				<h3>{article.author}</h3>
				<em> Posté le {dateParser(article.date)}</em>
			</div>
			{isEditing ? (
				<textarea
					autoFocus
					defaultValue={editedContent ? editedContent : article.content}
					onChange={(e) => setEditedContent(e.target.value)}
				></textarea>
			) : (
				<p>{editedContent ? editedContent : article.content}</p>
			)}
			<div className="btn-container">
				{isEditing ? (
					<button onClick={handleEdit}>Save</button>
				) : (
					<button onClick={() => setIsEditing(true)}>Edit</button>
				)}
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default Article;

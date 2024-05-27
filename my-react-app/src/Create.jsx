import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headeres: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      console.log('successful');
      setIsLoading(false);
      navigate('/');
    })


  }

  return (
    <div className="create">
      <h2>Add a New Blog.</h2>
      <form onSubmit={handleSubmit}>
        <label type="text" required>
          Blog Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label type="text" required>
          Blog Body:
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Loading...</button>}
      </form>
    </div>
  );
}

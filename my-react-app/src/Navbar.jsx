import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>Blog Title</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
              color: 'white',
              backgroundColor: "#f1356d",
              borderRadius: '8px'
            }}>Create Blog Post</Link>
        </div>
    </nav>
  )
}

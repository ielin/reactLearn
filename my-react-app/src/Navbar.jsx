import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>Blog Title</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
              color: 'white',
              backgroundColor: "#f1356d",
              borderRadius: '8px'
            }}>Create Blog Post</a>
        </div>
    </nav>
  )
}

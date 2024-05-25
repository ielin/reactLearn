import React, { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState('Joel');
  const [age, setAge] = useState(50);

  function handleClick() {
    console.log("Button Clicked");
    setFirstName("Ellie");
    setAge(14);
  }

  return (
    <div className="home">
      <h2>Home</h2>
      <p>{firstName} is {age} years old.</p>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

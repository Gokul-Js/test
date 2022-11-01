import React, { useState, useEffect } from "react";

const text = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState();

  const clickHandler = () => {
    count >= 10 ? "" : setCount(count + 1);
  };

  const clickHandler2 = () => {
    count === 0 ? "" : setCount(count - 1);
  };

  const clickHandler3 = () => {
    setCount(0);
  };

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const person = {
    firstName: "Ritesh",
    lastName: "Golu",
    age: "22",
    fullName() {
      return `${person.firstName} ${person.lastName}`;
    }
  };

  return (
    <div>
      <h1>
        My Full Name is {person.firstName} {person.lastName} & I am {person.age}
        year old
      </h1>
      <h2>{count}</h2>
      <button
        onClick={clickHandler3}
        style={{
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "50px",
          marginRight: "10px",
          padding: "8px"
        }}
      >
        Reset Counter
      </button>
      <button
        onClick={clickHandler}
        style={{
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "50px",
          marginRight: "10px",
          padding: "8px"
        }}
      >
        Increment Counter
      </button>

      <button
        onClick={clickHandler2}
        style={{
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50px",
          marginRight: "10px",
          padding: "8px"
        }}
      >
        Decrement Counter
      </button>
      <p>{advice}</p>

      <form>
        <input type="text" placeholder="Name" name="user_name" />
        <input type="text" placeholder="Subject" name="user_subject" />
        <input type="text" placeholder="Email" name="user_email" />
        <textarea rows="8" placeholder="Message" name="Message" />
        <button
          style={{
            background: "darkblue",
            color: "white",
            border: "none",
            borderRadius: "50px",
            margin: "50px",
            padding: "12px",
            width: "200px",
            cursor: "pointer",
            display: "inline"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default text;

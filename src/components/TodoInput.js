import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .todo {
    border-radius: 3rem;
    border: transparent;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    text-align: center;
  }
  .btn {
    display: block;
    margin: 0.5rem auto;

    height: 2rem;
  }
`;

const TodoInput = () => {
  const [values, setValues] = useState("");
  const [data, setData] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (values) {
      setValues("");
      setData(values);
      console.log(data);
    } else {
      console.log("error");
    }
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="todo"
          value={values}
          onChange={handleChange}
          className="todo"
        />
        <button className="btn">add toDo</button>
      </form>
    </Wrapper>
  );
};

export default TodoInput;

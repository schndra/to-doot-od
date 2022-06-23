import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Wrapper = styled.div`
  .btn {
    width: 95%;
    display: block;
    margin: 0 auto;
  }
`;

const TodoList = () => {
  return (
    <Wrapper>
      <ul>
        <TodoItem />
        <button type="button" className="btn btn-hipster">
          clear list
        </button>
      </ul>
    </Wrapper>
  );
};

export default TodoList;

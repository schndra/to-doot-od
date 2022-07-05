import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default TodoList;

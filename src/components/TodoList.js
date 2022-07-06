import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { items, removeTodo, editTodo } = props;

  return (
    <>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;

import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: var(--background-color);
  border-radius: var(--borderRadius);
  padding: 0.6rem;
  margin-bottom: 0.5rem;

  .edit-btn {
    margin-right: 0.5rem;
  }

  p {
    display: inline-block;
    margin: 0;
    transition: var(--transition);
    color: var(--grey-900);
  }
  li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  .icons {
    margin-left: 0.4rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const TodoItem = (props) => {
  const { id, title, removeTodo, editTodo } = props;
  return (
    <>
      <Wrapper>
        <li>
          <p>{title}</p>
          <div>
            <button
              type="button"
              className="edit-btn"
              onClick={() => editTodo(id)}
            >
              {<FaRegEdit />}
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeTodo(id)}
            >
              {<FaTrash />}
            </button>
          </div>
        </li>
      </Wrapper>
    </>
  );
};

export default TodoItem;

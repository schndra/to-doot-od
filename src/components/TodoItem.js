import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: var(--background-color);
  border-radius: var(--borderRadius);
  padding: 0.6rem;
  margin-bottom: 0.5rem;

  h5 {
    display: inline-block;
    margin: 0;
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

const TodoItem = () => {
  return (
    <>
      <Wrapper>
        <li>
          <h5>Title</h5>
          <div>
            <FaEdit className="edit-link" />
            <FaTrashAlt className="delete-btn" />
          </div>
        </li>
      </Wrapper>
    </>
  );
};

export default TodoItem;
